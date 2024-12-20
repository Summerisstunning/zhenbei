"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const forwardSteps = [
  {
    id: 1,
    title: "行为",
    description: `最近你做了哪些事情？你的行为代表了什么？这些行为背后，是否有一个故事或情境在推动？`
  },
  {
    id: 2,
    title: "感受",
    description: `当时你是什么样的情绪？是喜悦、愤怒、悲伤、恐惧，还是其他的？这些情绪是如何影响你的行为的？`
  },
  {
    id: 3,
    title: "感受的感受",
    description: `你对自己的这些情绪有什么反应？你是否觉得这些情绪'不应该'？`
  },
  {
    id: 4,
    title: "观点",
    description: `你的行为和情绪背后，有哪些信念或观点在影响你？你认为'应该'怎样？'不应该'怎样？`
  },
  {
    id: 5,
    title: "期待",
    description: `你对自己、对他人、对世界有哪些期待？这些期待是明确的吗？还是潜意识里的？`
  },
  {
    id: 6,
    title: "渴望",
    description: `你在刚刚的情境中，真正渴望的是什么？你是渴望被爱、被接纳，还是希望自己被认可、有价值、获得自由？`
  },
  {
    id: 7,
    title: "自我",
    description: `你是谁？你内在的生命力、精神、核心价值是什么？如果你回到你的内在核心，你会如何描述自己？`
  }
]

const backwardSteps = [
  {
    id: 8,
    title: "自我",
    description: `你如何让这个真实的自己更多地呈现出来？这个'我是'如何引导你做出更真实、更自由的选择？`
  },
  {
    id: 9,
    title: "渴望",
    description: `从你的'自我'出发，去理解你的渴望：你如何满足自己内心深处的渴望？这些渴望如何让你感受到生命的意义和价值？`
  },
  {
    id: 10,
    title: "期待",
    description: `这些期待是合理的吗？还是过于苛求自己或他人？你如何调整这些期待，让它们更加平衡和真实？`
  },
  {
    id: 11,
    title: "观点",
    description: `哪些信念在支持你？哪些信念需要调整？你可以选择新的、更积极的信念来引导你的行为吗？`
  },
  {
    id: 12,
    title: "感受的感受",
    description: `你是否可以接受自己的情绪？允许自己真实地感受，而不去批判或压抑它们？`
  },
  {
    id: 13,
    title: "感受",
    description: `当你接纳这些感受后，你的内心是否更加平静？这些感受在告诉你什么？它们是否带来了新的洞察？`
  },
  {
    id: 14,
    title: "行为",
    description: `现在，你会选择怎样的行动？这个行动是否更符合你的真实渴望和内在自我？`
  }
]

export default function IcebergModel() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [showSummary, setShowSummary] = useState(false)

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

        <h1 className="text-3xl font-bold mb-8 text-gray-800">冰山模型</h1>

        <div className="relative mb-12">
          <Image
            src="/冰山模型.jpg"
            alt="冰山模型"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">往路</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {forwardSteps.map((step) => (
                <motion.button
                  key={step.id}
                  className={`p-4 rounded-lg border ${
                    activeStep === step.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {step.title}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">返路</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backwardSteps.map((step) => (
                <motion.button
                  key={step.id}
                  className={`p-4 rounded-lg border ${
                    activeStep === step.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {step.title}
                </motion.button>
              ))}
            </div>
          </div>

          {activeStep && (
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-semibold mb-2">
                {activeStep <= 7
                  ? forwardSteps[activeStep - 1].title
                  : backwardSteps[activeStep - 8].title}
              </h3>
              <p className="text-gray-600">
                {activeStep <= 7
                  ? forwardSteps[activeStep - 1].description
                  : backwardSteps[activeStep - 8].description}
              </p>
            </motion.div>
          )}

          {!showSummary && activeStep === 14 && (
            <motion.button
              className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setShowSummary(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              查看总结
            </motion.button>
          )}

          {showSummary && (
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-semibold mb-2">总结</h3>
              <p className="text-gray-600">
                通过冰山模型的探索，我们看到行为背后隐藏着深层的情绪、信念和渴望。
                而当我们触及内在的核心自我时，我们能够更真实地理解自己，做出更加有意识、
                有力量的选择。请带着今天的发现，去践行新的行为，活出真实的自己。
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </main>
  )
}
