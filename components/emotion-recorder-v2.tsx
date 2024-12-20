"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { PlusCircle } from "lucide-react"
import { Heart } from "lucide-react"

// Plutchik 8个基本情绪及其强度
const emotions = {
  joy: {
    name: "喜悦",
    levels: ["狂喜", "欢乐", "宁静"],
    color: "#FFD700",
    icon: "🌟",
  },
  trust: {
    name: "信任",
    levels: ["崇敬", "接纳", "欣赏"],
    color: "#90EE90",
    icon: "🤝",
  },
  fear: {
    name: "恐惧",
    levels: ["惊恐", "害怕", "担忧"],
    color: "#98FB98",
    icon: "😨",
  },
  surprise: {
    name: "惊讶",
    levels: ["震惊", "吃惊", "好奇"],
    color: "#87CEEB",
    icon: "😲",
  },
  sadness: {
    name: "悲伤",
    levels: ["悲痛", "难过", "失落"],
    color: "#4169E1",
    icon: "😢",
  },
  disgust: {
    name: "厌恶",
    levels: ["憎恨", "反感", "不适"],
    color: "#9370DB",
    icon: "🤢",
  },
  anger: {
    name: "愤怒",
    levels: ["暴怒", "生气", "恼火"],
    color: "#FF4500",
    icon: "😠",
  },
  anticipation: {
    name: "期待",
    levels: ["热切", "盼望", "关注"],
    color: "#FFA500",
    icon: "🤗",
  },
}

export interface EmotionRecord {
  type: string
  level: string
  custom?: string
  timestamp: number
}

interface EmotionRecorderProps {
  onRecordEmotion?: (record: EmotionRecord) => void
}

export function EmotionRecorderV2({ onRecordEmotion }: EmotionRecorderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmotion, setSelectedEmotion] = useState<string>("")
  const [selectedLevel, setSelectedLevel] = useState<string>("")
  const [customEmotion, setCustomEmotion] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [records, setRecords] = useState<EmotionRecord[]>([])
  const [showReminder, setShowReminder] = useState(false)

  // 从 localStorage 加载记录
  useEffect(() => {
    const savedRecords = localStorage.getItem("emotionRecords")
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords))
    }
  }, [])

  // 保存记录到 localStorage
  useEffect(() => {
    localStorage.setItem("emotionRecords", JSON.stringify(records))
  }, [records])

  // 情绪提醒定时器
  useEffect(() => {
    const checkLastRecord = () => {
      const lastRecord = records[records.length - 1]
      const now = Date.now()
      if (!lastRecord || now - lastRecord.timestamp > 30 * 60 * 1000) {
        setShowReminder(true)
      }
    }

    const timer = setInterval(checkLastRecord, 30 * 60 * 1000)
    checkLastRecord() // 初始检查

    return () => clearInterval(timer)
  }, [records])

  const handleSubmit = () => {
    const newRecord: EmotionRecord = {
      type: isCustom ? "custom" : selectedEmotion,
      level: isCustom ? customEmotion : selectedLevel,
      custom: isCustom ? customEmotion : undefined,
      timestamp: Date.now(),
    }

    setRecords(prev => [...prev, newRecord])
    onRecordEmotion?.(newRecord)
    setIsOpen(false)
    setSelectedEmotion("")
    setSelectedLevel("")
    setCustomEmotion("")
    setIsCustom(false)
    setShowReminder(false)
  }

  return (
    <>
      {/* 情绪记录按钮 */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2">
        <Button
          variant="outline"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100 hover:from-red-200 hover:via-yellow-200 hover:via-green-200 hover:via-blue-200 hover:to-purple-200 border-0 flex items-center gap-2 px-6 py-3 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
        >
          <Heart className="h-6 w-6 text-gray-600" />
          <span className="text-gray-600">记录情绪</span>
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-r from-red-50 via-yellow-50 via-green-50 via-blue-50 to-purple-50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-gray-800">此刻的心情如何？</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <RadioGroup
              value={selectedEmotion}
              onValueChange={value => {
                setSelectedEmotion(value)
                setIsCustom(value === "custom")
                if (value === "custom") {
                  setSelectedLevel("")
                }
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(emotions).map(([key, emotion]) => (
                  <Label
                    key={key}
                    className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer ${
                      selectedEmotion === key ? "bg-gray-100" : ""
                    }`}
                  >
                    <RadioGroupItem value={key} />
                    <span className="text-gray-700">
                      {emotion.icon} {emotion.name}
                    </span>
                  </Label>
                ))}
                <Label
                  className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer ${
                    isCustom ? "bg-gray-100" : ""
                  }`}
                >
                  <RadioGroupItem value="custom" />
                  <span className="text-gray-700">✏️ 自定义</span>
                </Label>
              </div>
            </RadioGroup>

            {selectedEmotion && !isCustom && (
              <RadioGroup
                value={selectedLevel}
                onValueChange={setSelectedLevel}
                className="space-y-2"
              >
                <div className="grid grid-cols-3 gap-4">
                  {emotions[selectedEmotion as keyof typeof emotions]?.levels.map(
                    (level, index) => (
                      <Label
                        key={level}
                        className={`flex items-center space-x-2 p-4 rounded-lg cursor-pointer ${
                          selectedLevel === level ? "bg-gray-100" : ""
                        }`}
                      >
                        <RadioGroupItem value={level} />
                        <span className="text-gray-700">{level}</span>
                      </Label>
                    )
                  )}
                </div>
              </RadioGroup>
            )}

            {isCustom && (
              <Input
                placeholder="请输入你的心情..."
                value={customEmotion}
                onChange={e => setCustomEmotion(e.target.value)}
                className="text-gray-700"
              />
            )}

            <Button
              onClick={handleSubmit}
              disabled={
                (!isCustom && (!selectedEmotion || !selectedLevel)) ||
                (isCustom && !customEmotion)
              }
              className="w-full text-gray-700"
            >
              记录
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 提醒弹窗 */}
      <Dialog open={showReminder} onOpenChange={setShowReminder}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-gray-800">还没有记录情绪哦！</DialogTitle>
          </DialogHeader>
          <p className="text-gray-700">现在的你感觉如何？</p>
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={() => setShowReminder(false)} className="text-gray-700">
              稍后提醒
            </Button>
            <Button
              onClick={() => {
                setShowReminder(false)
                setIsOpen(true)
              }}
              className="text-gray-700"
            >
              立即记录
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
