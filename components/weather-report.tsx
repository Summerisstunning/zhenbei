"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Cloud } from "lucide-react"

export function WeatherReport() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="ghost"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
        >
          <Cloud className="h-5 w-5" />
          <span className="text-lg font-serif">气象报告</span>
        </Button>
        <DialogContent className="bg-white/95 backdrop-blur-sm border-none rounded-[60px_30px_50px_40px] p-8 w-[500px] shadow-xl">
          <DialogTitle className="sr-only">气象报告</DialogTitle>
          <div className="space-y-6 text-gray-700 font-serif leading-relaxed">
            <p className="text-lg">
              请觉知此刻您的身体感受：
              <br />
              <span className="text-gray-500 text-base">
                例如某个部位的微小疼痛、酸胀或其他感受。
              </span>
            </p>
            <p className="text-lg">
              然后描述此刻的情绪：
              <br />
              <span className="text-gray-500 text-base">
                注意：只关注情绪，不涉及其他。
              </span>
            </p>
            <p className="text-lg">
              最后，请表达当下脑中您的念头
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
