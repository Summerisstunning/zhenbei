"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const questions = [
  "你的故事是否有某种重复的模式？如果有，是什么？",
  "在这些重大时刻所发生的二三个主题是什么？",
  "能激发你的梦想是什么？",
  "所有这些事件显示出你最关注的是什么？",
  "用户所秉承的理念赋予你的生活和工作怎样的意义和目标？"
]

export default function LifeStory() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/course/1" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← 返回课程页面
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-gray-800">生命故事</h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎙️</span>
              录制你的生命故事
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              请用手机录音或者和朋友描述20分钟的生命故事。在描述完后，请思考以下问题：
            </p>
            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                >
                  <p className="text-gray-700">{question}</p>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            onClick={() => alert("请使用手机录音功能进行录制")}
          >
            开始录制
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
