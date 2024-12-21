"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js"
import { EmotionRecord } from "./emotion-recorder-v2"

ChartJS.register(ArcElement, Tooltip, Legend)

const intensityColors = {
  高: "bg-red-500",
  中: "bg-yellow-500",
  低: "bg-blue-500",
}

export function EmotionHistory() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTab, setSelectedTab] = useState("history")
  const [records, setRecords] = useState<EmotionRecord[]>([])
  const [reminderInterval, setReminderInterval] = useState(30)

  // 从 localStorage 加载记录
  useEffect(() => {
    const loadRecords = () => {
      const savedRecords = localStorage.getItem("emotionRecords")
      if (savedRecords) {
        setRecords(JSON.parse(savedRecords))
      }
    }

    loadRecords()
    // 添加事件监听器以在其他组件更新记录时更新
    window.addEventListener("storage", loadRecords)
    return () => window.removeEventListener("storage", loadRecords)
  }, [])

  // 获取选定日期的记录
  const getRecordsForDate = (date: Date) => {
    return records.filter(record => {
      const recordDate = new Date(record.timestamp)
      return (
        recordDate.getFullYear() === date.getFullYear() &&
        recordDate.getMonth() === date.getMonth() &&
        recordDate.getDate() === date.getDate()
      )
    })
  }

  // 生成图表数据
  const generateChartData = (dateRecords: EmotionRecord[]) => {
    const emotionCounts: Record<string, number> = {}
    dateRecords.forEach(record => {
      const type = record.custom ? record.level : record.type
      emotionCounts[type] = (emotionCounts[type] || 0) + 1
    })

    return {
      labels: Object.keys(emotionCounts),
      datasets: [
        {
          data: Object.values(emotionCounts),
          backgroundColor: [
            "#FFD700",
            "#90EE90",
            "#98FB98",
            "#87CEEB",
            "#4169E1",
            "#9370DB",
            "#FF4500",
            "#FFA500",
          ],
        },
      ],
    }
  }

  const selectedDateRecords = selectedDate ? getRecordsForDate(selectedDate) : []
  const chartData = generateChartData(selectedDateRecords)

  return (
    <Card className="p-6 bg-white/90">
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="mb-4 bg-blue-50">
          <TabsTrigger value="history" className="text-gray-700 data-[state=active]:bg-blue-100">历史记录</TabsTrigger>
          <TabsTrigger value="stats" className="text-gray-700 data-[state=active]:bg-blue-100">统计分析</TabsTrigger>
          <TabsTrigger value="settings" className="text-gray-700 data-[state=active]:bg-blue-100">设置</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-serif mb-4 text-gray-800">最近情绪记录</h3>
              <div className="space-y-2">
                {records.slice(-10).reverse().map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-gray-700">
                        {record.custom ? record.level : record.type}
                      </span>
                      {!record.custom && (
                        <span
                          className={`px-2 py-1 rounded text-white text-sm ${
                            intensityColors[record.level as keyof typeof intensityColors] || "bg-gray-500"
                          }`}
                        >
                          {record.level}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-600">
                      {new Date(record.timestamp).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif mb-4 text-gray-800">选择日期</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="text-gray-700 bg-white rounded-lg p-2 sm:p-4 mx-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-serif mb-4 text-gray-800">情绪分布</h3>
                <div className="w-full aspect-square max-w-[300px] mx-auto">
                  <Pie 
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                              size: 12
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
                {selectedDateRecords.length > 0 ? (
                  <p className="mt-4 text-gray-600 text-center">
                    今天你记录了{selectedDateRecords.length}次情绪
                  </p>
                ) : (
                  <p className="mt-4 text-gray-600 text-center">当日暂无记录</p>
                )}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-4">
            <h3 className="text-xl font-serif mb-4 text-gray-800">提醒设置</h3>
            <div className="space-y-2 bg-blue-50 p-4 rounded-lg">
              <label className="block text-sm font-medium text-gray-700">
                记录提醒间隔
              </label>
              <select
                value={reminderInterval}
                onChange={(e) => setReminderInterval(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-blue-50 text-gray-700"
              >
                <option value={30} className="bg-blue-50 text-gray-700">每30分钟</option>
                <option value={60} className="bg-blue-50 text-gray-700">每1小时</option>
                <option value={120} className="bg-blue-50 text-gray-700">每2小时</option>
                <option value={240} className="bg-blue-50 text-gray-700">每4小时</option>
              </select>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
