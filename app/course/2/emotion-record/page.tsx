"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useEmotionRecords } from "@/hooks/useEmotionRecords"
import { useAuth } from "@/hooks/useAuth"

export default function EmotionRecord() {
  const { userId } = useAuth();
  const { records, addRecord } = useEmotionRecords();
  const [currentEmotion, setCurrentEmotion] = useState({
    date: new Date().toISOString().split('T')[0],
    emotion: "",
    intensity: 5,
    trigger: "",
    thoughts: "",
    bodyFeelings: "",
    behaviors: ""
  });

  const handleSubmit = () => {
    addRecord(currentEmotion);
    // 清空表单
    setCurrentEmotion({
      date: new Date().toISOString().split('T')[0],
      emotion: "",
      intensity: 5,
      trigger: "",
      thoughts: "",
      bodyFeelings: "",
      behaviors: ""
    });
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-blue-50 to-pink-50">
      <Card className="max-w-2xl mx-auto p-6 bg-white/90">
        <h1 className="text-2xl font-serif mb-6 text-gray-800">情绪记录</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              日期
            </label>
            <input
              type="date"
              value={currentEmotion.date}
              onChange={(e) => setCurrentEmotion({...currentEmotion, date: e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              情绪
            </label>
            <Textarea
              value={currentEmotion.emotion}
              onChange={(e) => setCurrentEmotion({...currentEmotion, emotion: e.target.value})}
              placeholder="你感受到了什么情绪？"
              className="min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              强度 (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={currentEmotion.intensity}
              onChange={(e) => setCurrentEmotion({...currentEmotion, intensity: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="text-center">{currentEmotion.intensity}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              触发事件
            </label>
            <Textarea
              value={currentEmotion.trigger}
              onChange={(e) => setCurrentEmotion({...currentEmotion, trigger: e.target.value})}
              placeholder="是什么引发了这种情绪？"
              className="min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              想法
            </label>
            <Textarea
              value={currentEmotion.thoughts}
              onChange={(e) => setCurrentEmotion({...currentEmotion, thoughts: e.target.value})}
              placeholder="当时你在想什么？"
              className="min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              身体感受
            </label>
            <Textarea
              value={currentEmotion.bodyFeelings}
              onChange={(e) => setCurrentEmotion({...currentEmotion, bodyFeelings: e.target.value})}
              placeholder="你的身体有什么感受？"
              className="min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              行为反应
            </label>
            <Textarea
              value={currentEmotion.behaviors}
              onChange={(e) => setCurrentEmotion({...currentEmotion, behaviors: e.target.value})}
              placeholder="你做了什么？"
              className="min-h-[80px]"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full">
            保存记录
          </Button>
        </div>

        {/* 显示历史记录 */}
        <div className="mt-8">
          <h2 className="text-xl font-serif mb-4 text-gray-800">历史记录</h2>
          <div className="space-y-4">
            {records.map((record) => (
              <Card key={record.id} className="p-4 bg-white/80">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-500">{new Date(record.date).toLocaleDateString()}</div>
                  <div className="text-sm font-medium">强度: {record.intensity}</div>
                </div>
                <div className="space-y-2">
                  <p><strong>情绪：</strong>{record.emotion}</p>
                  <p><strong>触发事件：</strong>{record.trigger}</p>
                  <p><strong>想法：</strong>{record.thoughts}</p>
                  <p><strong>身体感受：</strong>{record.bodyFeelings}</p>
                  <p><strong>行为反应：</strong>{record.behaviors}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </main>
  );
}
