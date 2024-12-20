"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Music, Pause, Play } from "lucide-react"

const musicFiles = [
  "/冥想1.m4a",
  "/冥想2.m4a",
  "/冥想3.mp3",
  "/冥想4.mp3",
]

// 创建一个全局的音频实例和状态
let globalAudio: HTMLAudioElement | null = null
let globalSetIsPlaying: ((playing: boolean) => void) | null = null

export function MeditationMusic({ white = false }: { white?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)

  // 保存全局设置状态的函数
  if (!globalSetIsPlaying) {
    globalSetIsPlaying = setIsPlaying
  }

  const playRandomTrack = () => {
    if (isPlaying && globalAudio) {
      globalAudio.pause()
      setIsPlaying(false)
      if (globalSetIsPlaying) {
        globalSetIsPlaying(false)
      }
      return
    }

    const randomTrack = musicFiles[Math.floor(Math.random() * musicFiles.length)]
    
    if (!globalAudio) {
      globalAudio = new Audio(randomTrack)
      globalAudio.addEventListener("ended", () => {
        setIsPlaying(false)
        if (globalSetIsPlaying) {
          globalSetIsPlaying(false)
        }
      })
    } else {
      globalAudio.src = randomTrack
    }

    globalAudio.play()
    setIsPlaying(true)
    if (globalSetIsPlaying) {
      globalSetIsPlaying(true)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`relative ${white ? "text-white hover:text-white/80" : ""}`}
      onClick={playRandomTrack}
      title={isPlaying ? "暂停" : "播放"}
    >
      {isPlaying ? (
        <Pause className="h-5 w-5" />
      ) : (
        <Play className="h-5 w-5" />
      )}
      {isPlaying && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
      )}
    </Button>
  )
}
