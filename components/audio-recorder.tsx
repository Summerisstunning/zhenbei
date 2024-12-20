"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AudioRecorderProps {
  title: string
  description: string
}

export default function AudioRecorder({ title, description }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string>("")
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/wav" })
        const url = URL.createObjectURL(audioBlob)
        setAudioURL(url)
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (err) {
      console.error("Error accessing microphone:", err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const downloadRecording = () => {
    if (audioURL) {
      const a = document.createElement("a")
      a.href = audioURL
      a.download = `${title}-${new Date().toISOString()}.wav`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  return (
    <Card className="p-6 bg-white/90">
      <h2 className="text-2xl font-serif text-gray-800">{title}</h2>
      <div className="space-y-4">
        <p className="text-gray-600 whitespace-pre-line">{description}</p>
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={isRecording ? stopRecording : startRecording}
            variant={isRecording ? "destructive" : "default"}
          >
            {isRecording ? "停止录音" : "开始录音"}
          </Button>
          {audioURL && (
            <>
              <audio controls src={audioURL} className="w-full max-w-md" />
              <Button onClick={downloadRecording} variant="outline">
                下载录音
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}
