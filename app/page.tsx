"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { WeatherReport } from "@/components/weather-report"
import { MeditationMusic } from "@/components/meditation-music"

const courses = [
  { 
    id: 1, 
    title: "自我觉察", 
    description: "探索内在世界，认识真实的自己",
    color: "bg-[#F8D7DA]",
    hoverColor: "hover:bg-[#F5C2C7]",
    textColor: "text-[#842029]",
    icon: "◈",
    path: "/course/1" 
  },
  { 
    id: 2, 
    title: "自我认知", 
    description: "理解思维模式，掌握情绪管理",
    color: "bg-[#D1E7DD]",
    hoverColor: "hover:bg-[#BADBCC]",
    textColor: "text-[#0F5132]",
    icon: "◇",
    path: "/course/2" 
  },
  { 
    id: 3, 
    title: "觉察与反思", 
    description: "培养觉知能力，深化自我认识",
    color: "bg-[#CFF4FC]",
    hoverColor: "hover:bg-[#B6EFFB]",
    textColor: "text-[#055160]",
    icon: "○",
    path: "/course/3" 
  },
  { 
    id: 4, 
    title: "深度转化", 
    description: "突破限制，实现个人成长",
    color: "bg-[#E2E3E5]",
    hoverColor: "hover:bg-[#D3D6D8]",
    textColor: "text-[#41464B]",
    icon: "□",
    path: "/course/4" 
  },
  { 
    id: 5, 
    title: "亲密关系", 
    description: "构建健康的人际连接",
    color: "bg-[#FFE5D0]",
    hoverColor: "hover:bg-[#FFD7B5]",
    textColor: "text-[#664D03]",
    icon: "△",
    path: "/course/5" 
  },
  { 
    id: 6, 
    title: "界限", 
    description: "设立健康边界，保护内在空间",
    color: "bg-[#E0CFFC]",
    hoverColor: "hover:bg-[#D0B7FA]",
    textColor: "text-[#3B0764]",
    icon: "▽",
    path: "/course/6" 
  },
  { 
    id: 7, 
    title: "阴影一", 
    description: "接纳内在阴影，转化负面能量",
    color: "bg-[#FFF3CD]",
    hoverColor: "hover:bg-[#FFE69C]",
    textColor: "text-[#997404]",
    icon: "◎",
    path: "/course/7" 
  },
  { 
    id: 8, 
    title: "阴影二", 
    description: "深入阴影工作，实现整合",
    color: "bg-[#F8F9FA]",
    hoverColor: "hover:bg-[#E9ECEF]",
    textColor: "text-[#495057]",
    icon: "◉",
    path: "/course/8" 
  },
]

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 背景图片 */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/forest-bg.jpg"
          alt="Healing Forest Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkFTZGRmYWVbW1v/2wBDARUXFx4aHh4lHR0lW0I3Qltba2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4 font-serif">
            大象真北课程
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            探索内在，遇见真实的自己
          </p>
          <div className="flex justify-center items-center gap-4">
            <WeatherReport />
            <div className="flex items-center gap-2">
              <MeditationMusic white />
              <span className="text-white text-base">冥想音乐</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-64"
            >
              <Link href={course.path} className="block h-full">
                <Card className={`group h-full p-6 transition-all duration-300 border-none rounded-xl ${course.color} ${course.hoverColor}`}>
                  <div className="flex flex-col h-full">
                    <div className="text-3xl mb-4">
                      {course.icon}
                    </div>
                    <div className={course.textColor}>
                      <h2 className="text-2xl font-serif mb-2">
                        课程 {course.id}
                      </h2>
                      <h3 className="text-lg font-medium mb-2">
                        {course.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
