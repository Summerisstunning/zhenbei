"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export function IGOTherapy() {
  const [loading1, setLoading1] = useState(true)
  const [loading2, setLoading2] = useState(true)

  return (
    <Card className="p-6 bg-white/90">
      <h2 className="text-2xl font-serif mb-6 text-gray-800">IGO情绪处理法</h2>
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">内进</h3>
          <p className="text-gray-600">
            通过内在的觉察和探索，理解自己的情绪状态。
          </p>
          <div className="relative">
            {loading1 && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
              </div>
            )}
            <audio 
              controls 
              src="/内进.m4a" 
              className="w-full [&::-webkit-media-controls-panel]:bg-blue-50" 
              onLoadedData={() => setLoading1(false)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">远观</h3>
          <p className="text-gray-600">
            跳出当前情境，以更宏观的视角看待问题。
          </p>
          <div className="relative">
            {loading2 && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
              </div>
            )}
            <audio 
              controls 
              src="/远观.m4a" 
              className="w-full [&::-webkit-media-controls-panel]:bg-blue-50" 
              onLoadedData={() => setLoading2(false)}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
