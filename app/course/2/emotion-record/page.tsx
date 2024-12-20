import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

// 图表组件（使用 recharts）
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const COLORS = [
  "#FF8042",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#FF6B6B",
  "#4CAF50",
  "#9C27B0",
]

export default function EmotionRecord() {
  const [records, setRecords] = useState<any[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  // 从 localStorage 加载数据
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("emotionRecords") || "[]")
    setRecords(storedRecords)
  }, [])

  // 获取选定日期的记录
  const getDayRecords = () => {
    return records.filter(record => 
      record.timestamp.startsWith(selectedDate)
    )
  }

  // 统计情绪分布
  const getEmotionStats = () => {
    const dayRecords = getDayRecords()
    const stats = dayRecords.reduce((acc: any, record: any) => {
      acc[record.emotion] = (acc[record.emotion] || 0) + 1
      return acc
    }, {})

    return Object.entries(stats).map(([name, value]) => ({
      name,
      value,
    }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/course/2" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← 返回课程页面
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-gray-800">情绪记录</h1>

        <div className="space-y-8">
          {/* 日期选择 */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">选择日期</h2>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border rounded p-2"
            />
          </Card>

          {/* 情绪统计 */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">情绪分布</h2>
            <div className="flex justify-center">
              <PieChart width={400} height={300}>
                <Pie
                  data={getEmotionStats()}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => 
                    \`\${name} (\${(percent * 100).toFixed(0)}%)\`
                  }
                >
                  {getEmotionStats().map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </Card>

          {/* 历史记录 */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">历史记录</h2>
            <div className="space-y-4">
              {getDayRecords().map((record, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <p className="text-gray-800">
                    情绪：{record.emotion}
                    {record.intensity && ` - ${record.intensity}`}
                  </p>
                  <p className="text-gray-600 text-sm">
                    时间：{new Date(record.timestamp).toLocaleString()}
                  </p>
                </motion.div>
              ))}
              {getDayRecords().length === 0 && (
                <p className="text-gray-600 text-center">当日暂无记录</p>
              )}
            </div>
          </Card>
        </div>
      </motion.div>
    </main>
  )
}
