"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const steps = [
  {
    id: "trigger",
    title: "1. 识别触发事件（A）",
    description: "最近发生了什么事情，让你感到不舒服或情绪起伏？请具体描述事件。",
  },
  {
    id: "belief",
    title: "2. 探究信念（B）",
    description: "在那个情境中，你脑海里冒出了什么想法？你对这个事件有什么评价或理解？你认为它意味着什么？",
  },
  {
    id: "consequence",
    title: "3. 分析结果（C）",
    description: "当你产生这些想法时，你的情绪是什么？你做出了怎样的反应？（例如：生气、难过、回避、争吵）",
  },
  {
    id: "challenge",
    title: "4. 挑战非理性信念",
    description: `这些想法或信念有什么证据支持？

有没有可能你对这个事件的解释是片面的或夸大的？

如果换个角度思考，可能会是什么样？`,
  },
  {
    id: "newBelief",
    title: "5. 建立新信念",
    description: "如果你用一个更合理的想法来看待这个事件，你会怎么想？这样的新想法会带给你怎样的感受和行为？",
  },
  {
    id: "reflection",
    title: "6. 总结与反思",
    description: "通过这次思考，你学到了什么？你现在的感受如何？下一次遇到类似的事情时，你会如何应对？",
  },
]

export function CognitiveTherapy() {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [showSummary, setShowSummary] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (value: string) => {
    setResponses({
      ...responses,
      [steps[currentStep].id]: value,
    })
  }

  const generateSummary = () => {
    let summary = "认知疗法记录\n\n"
    steps.forEach(step => {
      summary += `${step.title}\n${responses[step.id] || "（未填写）"}\n\n`
    })
    return summary
  }

  const hasAnyResponse = Object.values(responses).some(response => response.trim() !== "")

  return (
    <Card className="p-6 bg-white/90">
      {hasAnyResponse ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-serif text-gray-800">认知重建练习</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{steps[currentStep].title}</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {steps[currentStep].description}
              </p>
              <Textarea
                value={responses[steps[currentStep].id] || ""}
                onChange={(e) => handleInputChange(e.target.value)}
                className="min-h-[120px] text-gray-700"
                placeholder="在这里输入你的想法..."
              />
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="text-gray-700"
              >
                上一步
              </Button>
              <Button
                onClick={handleNext}
                className="text-gray-700"
              >
                {currentStep === steps.length - 1 ? "完成" : "下一步"}
              </Button>
            </div>
          </div>

          <Dialog open={showSummary} onOpenChange={setShowSummary}>
            <DialogContent className="max-w-3xl">
              <DialogTitle className="text-xl font-semibold text-gray-800">认知日记总结</DialogTitle>
              <div className="mt-4">
                <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm">
                  {generateSummary()}
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const blob = new Blob([generateSummary()], { type: "text/plain" })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement("a")
                      a.href = url
                      a.download = "认知日记.txt"
                      document.body.appendChild(a)
                      a.click()
                      document.body.removeChild(a)
                      URL.revokeObjectURL(url)
                    }}
                    className="text-gray-700"
                  >
                    下载总结
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            让我们一起探索内心，记录你的想法和感受
          </p>
          <Button
            className="mt-4"
            onClick={() => handleInputChange("让我开始记录...")}
            className="text-gray-700"
          >
            开始记录
          </Button>
        </div>
      )}
    </Card>
  )
}
