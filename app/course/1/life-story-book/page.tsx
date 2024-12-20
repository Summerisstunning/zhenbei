"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const chapters = [
  {
    title: "第一章：人生之书概览",
    content: "把你的人生看作一本书，梳理个人生命故事的纲要"
  },
  {
    title: "第二章：关键事件",
    content: "详细回忆八个关键事件：高峰体验、低谷体验、转折点、最早的记忆、重要的童年记忆、重要的青春期记忆、重要的成年期记忆、其他重要记忆"
  },
  {
    title: "第三章：重要人物",
    content: "详细描述你生命中的几个重要人物"
  },
  {
    title: "第四章：未来脚本",
    content: "拟写未来脚本，设想生命故事的未来"
  },
  {
    title: "第五章：当下挑战",
    content: "总结当下困住你的压力源、问题和挑战"
  },
  {
    title: "第六章：价值观探索",
    content: "了解自己的基本信念与价值观"
  },
  {
    title: "第七章：人生主题",
    content: "总结出自己的人生主题"
  }
]

export default function LifeStoryBook() {
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

        <h1 className="text-3xl font-bold mb-8 text-gray-800">生命故事之书</h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              创作你的生命故事之书
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              请用手机录音或者和朋友描述20分钟的生命故事，按照下述章节展开叙述：
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`chapter-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      {chapter.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">{chapter.content}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
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
