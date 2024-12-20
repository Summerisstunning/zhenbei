"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function EmotionRecorder() {
  const [isOpen, setIsOpen] = useState(false)
  const [emotion, setEmotion] = useState("")
  const [intensity, setIntensity] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = () => {
    // 保存情绪记录到本地存储
    const record = {
      emotion,
      intensity,
      note,
      timestamp: new Date().toISOString()
    }

    const records = JSON.parse(localStorage.getItem("emotionRecords") || "[]")
    records.push(record)
    localStorage.setItem("emotionRecords", JSON.stringify(records))

    // 重置表单
    setEmotion("")
    setIntensity("")
    setNote("")
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        >
          📝
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <Card className="w-full max-w-md p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-4">记录当前情绪</h3>
              
              <div className="space-y-6">
                <div>
                  <Label>情绪类型</Label>
                  <RadioGroup value={emotion} onValueChange={setEmotion}>
                    <div className="grid grid-cols-2 gap-4">
                      <Label className="flex items-center space-x-2">
                        <RadioGroupItem value="happy" />
                        <span>😊 开心</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <RadioGroupItem value="sad" />
                        <span>😢 难过</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <RadioGroupItem value="angry" />
                        <span>😠 生气</span>
                      </Label>
                      <Label className="flex items-center space-x-2">
                        <RadioGroupItem value="anxious" />
                        <span>😰 焦虑</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>情绪强度 (1-10)</Label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                  />
                </div>

                <div>
                  <Label>备注</Label>
                  <Input
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="记录一下发生了什么..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    取消
                  </Button>
                  <Button onClick={handleSubmit}>
                    保存
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
