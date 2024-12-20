"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { EmotionRecorder } from "@/components/emotion-recorder"
import { CommunicationAssistant } from "@/components/communication-assistant"
import { IGOTherapy } from "@/components/igo-therapy"
import { CognitiveTherapy } from "@/components/cognitive-therapy"
import { EmotionHistory } from "@/components/emotion-history"
import { EmotionRecorderV2 } from "@/components/emotion-recorder-v2"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MeditationMusic } from "@/components/meditation-music"
import { Home } from "lucide-react"

export default function Course2() {
  return (
    <main className="min-h-screen p-4 sm:p-8 relative">
      <Image
        src="/nature-bg-2.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent -z-10" />
      
      <div className="fixed m-4 sm:m-8 z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
            <Home className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-serif">自我认知</h1>
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg sm:text-xl text-gray-700">
            通过认知疗法，理解并改善你的思维模式
          </p>
          <div className="flex items-center gap-2 sm:gap-4 justify-center">
            <Link 
              href="/第2课自我认知.pdf" 
              target="_blank"
              className="inline-block bg-white/90 hover:bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition duration-300 text-sm sm:text-base"
            >
              查看课件
            </Link>
            <MeditationMusic />
          </div>
        </div>

        <Tabs defaultValue="communication" className="w-full space-y-4">
          <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1">
            <TabsTrigger value="communication" className="text-sm sm:text-base">
              好好说话
            </TabsTrigger>
            <TabsTrigger value="igo" className="text-sm sm:text-base">
              IGO情绪处理法
            </TabsTrigger>
            <TabsTrigger value="cognitive" className="text-sm sm:text-base">
              认知疗法
            </TabsTrigger>
            <TabsTrigger value="emotion" className="text-sm sm:text-base">
              情绪记录
            </TabsTrigger>
          </TabsList>

          <TabsContent value="communication">
            <Card className="p-6 bg-white/90">
              <CommunicationAssistant />
            </Card>
          </TabsContent>

          <TabsContent value="igo">
            <Card className="p-6 bg-white/90">
              <IGOTherapy />
            </Card>
          </TabsContent>

          <TabsContent value="cognitive">
            <Card className="p-6 bg-white/90">
              <CognitiveTherapy />
            </Card>
          </TabsContent>

          <TabsContent value="emotion">
            <EmotionHistory />
          </TabsContent>
        </Tabs>
      </div>
      
      <EmotionRecorderV2 onRecordEmotion={(record) => {
        // 触发 localStorage 事件以更新历史记录组件
        window.dispatchEvent(new Event("storage"))
      }} />
    </main>
  )
}
