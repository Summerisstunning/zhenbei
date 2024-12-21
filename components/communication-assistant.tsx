"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const steps = [
  {
    id: "background",
    title: "1. 背景：描述情境",
    description: `请告诉我，你想要沟通的背景是什么？

- 你想和谁沟通？（比如：朋友、同事、客户）
- 你想沟通的内容是什么？（比如：表达需求、解决冲突、传递信息）`,
  },
  {
    id: "perception",
    title: "2. 感官知觉：客观描述",
    description: `请你用看到、听到、闻到、尝到、触到来客观描述这个情境。

- 你看到了什么？（比如：'我看到对方皱起眉头'）
- 你听到了什么？（比如：'我听到对方提高了音量'）
- 尽量只描述客观的事实，而不是自己的解释。`,
  },
  {
    id: "interpretation",
    title: "3. 解读/解释：你的理解",
    description: `现在请你说说，你对这个事件的解读是什么？

- 你是怎么判断的？（比如：'我判断他不满意我的工作'）
- 你有没有猜测或假设？（比如：'我猜他可能生气了'）
- 这些想法是真实的吗？有没有其他可能性？`,
  },
  {
    id: "feeling",
    title: "4. 感觉/感受：表达情绪",
    description: `当你有这些判断或想法时，你的感觉是什么？

- 你是开心、放松、温暖，还是紧张、不舒服、焦虑？
- 请允许自己表达这些感受，这是很自然的反应。`,
  },
  {
    id: "verify",
    title: "5. 核对：避免误解",
    description: `现在，让我们去和对方核对一下，看看你的解读是否准确。

- 你可以问：'我刚刚听到你提高了音量，我想知道你是不是有些生气？'
- 注意：核对没有对与错，只有理解和澄清的过程。`,
  },
  {
    id: "intention",
    title: "6. 意图：明确目的",
    description: `接下来，请想一想：

- 你真正想要的是什么？
- 你的意图是什么？（比如：'我希望他理解我的努力'、'我想解决这个误会'）
- 你打算怎么去做？`,
  },
  {
    id: "action",
    title: "7. 行动：制定沟通计划",
    description: `最后，让我们把你的想法变成具体的行动：

- 你打算说什么？
- 你打算怎么说？（比如：用温和的语气、清晰的表达）
- 你下一步会采取什么行动？（比如：发送一条短信、面对面聊一聊）`,
  },
]

export function CommunicationAssistant() {
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
    let summary = ""
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
          <div>
            <h3 className="text-lg font-medium mb-2">{steps[currentStep].title}</h3>
            <p className="text-gray-600 whitespace-pre-line mb-4">
              {steps[currentStep].description}
            </p>
            
            <div className="space-y-4">
              <Textarea
                value={responses[steps[currentStep].id] || ""}
                onChange={(e) => handleInputChange(e.target.value)}
                className="min-h-[120px] text-gray-700 placeholder:text-gray-400"
                placeholder="在这里输入你的想法..."
              />
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  上一步
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button onClick={handleNext}>
                    下一步
                  </Button>
                ) : (
                  <Button onClick={() => setShowSummary(true)}>
                    总结
                  </Button>
                )}
              </div>
            </div>
          </div>

          <Dialog open={showSummary} onOpenChange={setShowSummary}>
            <DialogContent className="max-w-3xl">
              <DialogTitle className="text-xl font-semibold">沟通计划总结</DialogTitle>
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
                      a.download = "沟通计划.txt"
                      document.body.appendChild(a)
                      a.click()
                      document.body.removeChild(a)
                      URL.revokeObjectURL(url)
                    }}
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
            请用好好说话的工具来记录生活中的问题吧
          </p>
          <Button
            className="mt-4"
            onClick={() => handleInputChange("让我开始记录第一个问题...")}
          >
            开始记录
          </Button>
        </div>
      )}
    </Card>
  )
}
