"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioRecorder from "@/components/audio-recorder"
import IcebergDialog from "@/components/iceberg-dialog"
import { MeditationMusic } from "@/components/meditation-music"
import { Home } from "lucide-react"

const icebergSteps = {
  forward: [
    { title: "行为", content: `引导语：\n\n我们先来看冰山的顶部，也就是我们可以看到的部分——行为。\n\n请想一想：\n\n- 最近你做了哪些事情？\n- 你的行为代表了什么？（比如你的选择、习惯、说的话、做的决定）\n- 这些行为背后，是否有一个故事或情境在推动？\n\n示例：\n\n比如，你最近与某人发生了一次争吵，或者你推迟了一项任务，或者你在某个项目中表现积极。` },
    { title: "感受", content: `引导语：\n\n接下来，我们进入冰山的水面以下——你的感受。\n\n请回忆刚刚提到的行为，问问自己：\n\n- 当时你是什么样的情绪？是喜悦、愤怒、悲伤、恐惧，还是其他的？\n- 这些情绪是如何影响你的行为的？\n\n进一步探索：\n\n比如，当你与人争吵时，你可能感受到愤怒或伤害；当你拖延一项任务时，背后可能是焦虑或恐惧。` },
    { title: "感受的感受", content: `引导语：\n\n再往下走一步，我们来探索'感受的感受'。\n\n- 你对自己的这些情绪有什么反应？\n- 你是否觉得这些情绪'不应该'？比如，你是否因为愤怒而感到羞愧，或者因为恐惧而自责？\n\n补充：\n\n很多时候，我们的情绪之下还有更深层的情绪反应，比如害怕自己的情绪失控，或者对自己的感受感到困惑。` },
    { title: "观点", content: `引导语：\n\n现在，我们深入冰山的中层部分——你的观点。\n\n请思考：\n\n- 你的行为和情绪背后，有哪些信念或观点在影响你？\n- 你认为'应该'怎样？'不应该'怎样？\n- 这些观点是如何形成的？它们是来自过去的经历、习惯，还是别人对你的影响？\n\n示例：\n\n比如，你可能认为'表现出情绪是不成熟的'，或者'我必须事事完美才能被认可'。` },
    { title: "期待", content: `引导语：\n\n接下来，我们来到'期待'这一层。\n\n- 你对自己、对他人、对世界有哪些期待？\n- 这些期待是明确的吗？还是潜意识里的？\n- 这些期待是否在推动你的行为或情绪？\n\n引导反思：\n\n比如，你可能期待别人理解你、认同你，或者期待自己永远不会失败。` },
    { title: "渴望", content: `引导语：\n\n再往下走一步，我们来到了冰山的深处——'渴望'。\n\n这些渴望是我们每个人与生俱来的，它们让我们感受到生命的意义和价值。\n\n- 你在刚刚的情境中，真正渴望的是什么？\n- 你是渴望被爱、被接纳，还是希望自己被认可、有价值、获得自由？\n\n进一步探索：\n\n比如，有人争吵的背后，渴望的是理解和被接纳；拖延任务的背后，可能渴望自我认可或安全感。` },
    { title: "自我", content: `引导语：\n\n最后，我们来到冰山的核心——你的自我。\n\n在你所有的行为、情绪、观点、渴望的背后，有一个最真实的你。\n\n- 你是谁？\n- 你内在的生命力、精神、核心价值是什么？\n- 如果你回到你的内在核心，你会如何描述自己？\n\n反思与总结：\n\n在这里，你可以放下外界的期待和评价，真实地看到自己，比如'我是有价值的'，'我是被爱的'，'我是自由的'。` }
  ],
  backward: [
    { title: "自我", content: `引导语：\n\n现在，我们从核心的'自我'出发。\n\n请带着你刚刚找到的'自我'，问自己：\n\n- 你如何让这个真实的自己更多地呈现出来？\n- 这个'我是'如何引导你做出更真实、更自由的选择？` },
    { title: "渴望", content: `引导语：\n\n从你的'自我'出发，去理解你的渴望：\n\n- 你如何满足自己内心深处的渴望？\n- 这些渴望如何让你感受到生命的意义和价值？` },
    { title: "期待", content: `引导语：\n\n现在，重新看待你的期待：\n\n- 这些期待是合理的吗？还是过于苛求自己或他人？\n- 你如何调整这些期待，让它们更加平衡和真实？` },
    { title: "观点", content: `引导语：\n\n接下来，思考你的观点和信念：\n\n- 哪些信念在支持你？哪些信念需要调整？\n- 你可以选择新的、更积极的信念来引导你的行为吗？` },
    { title: "感受的感受", content: `引导语：\n\n回到你的感受：\n\n- 你是否可以接受自己的情绪？\n- 允许自己真实地感受，而不去批判或压抑它们？` },
    { title: "感受", content: `引导语：\n\n再次回顾你的情绪：\n\n- 当你接纳这些感受后，你的内心是否更加平静？\n- 这些感受在告诉你什么？它们是否带来了新的洞察？` },
    { title: "行为", content: `引导语：\n\n最后，回到你的行为：\n\n- 现在，你会选择怎样的行动？\n- 这个行动是否更符合你的真实渴望和内在自我？` }
  ]
}

export default function Course1() {
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean
    title: string
    content: string
  }>({
    isOpen: false,
    title: "",
    content: ""
  })

  const handleStepClick = (step: { title: string; content: string }) => {
    setDialogState({
      isOpen: true,
      title: step.title,
      content: step.content
    })
  }

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="/course1-bg.jpg"
          alt="Course 1 Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkFTZGRmYWVbW1v/2wBDARUXFx4aHh4lHR0lW0I3Qltba2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4 font-serif">
            自我觉察
          </h1>
          <p className="text-xl text-gray-200 mb-8 text-center">
            探索内在世界，认识真实的自己
          </p>
          <div className="flex items-center gap-4 justify-center">
            <Link 
              href="/第1课自我觉察.pdf" 
              target="_blank"
              className="inline-block bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg transition duration-300"
            >
              查看课件
            </Link>
            <MeditationMusic />
          </div>
        </motion.div>

        <Tabs defaultValue="story" className="w-full">
          <TabsList className="w-full mb-8">
            <TabsTrigger value="story" className="flex-1">生命故事</TabsTrigger>
            <TabsTrigger value="book" className="flex-1">生命之书</TabsTrigger>
            <TabsTrigger value="iceberg" className="flex-1">冰山模型</TabsTrigger>
          </TabsList>

          <TabsContent value="story">
            <Card className="p-6 bg-white/90">
              <AudioRecorder 
                title="记录你的生命故事"
                description={`• 你的故事是否有某种重复的模式？如果有，是什么？
• 在这些重大时刻所发生的二三个主题是什么？
• 能激发你的梦想是什么？
• 所有这些事件显示出你最关注的是什么？
• 用户所秉承的理念赋予你的生活和工作怎样的意义和目标？`}
              />
            </Card>
          </TabsContent>

          <TabsContent value="book">
            <Card className="p-6 bg-white/90">
              <AudioRecorder 
                title="书写生命之书"
                description={`请按照下述方法描述：

1. 把你的人生看作一本书，梳理个人生命故事的纲要
2. 详细回忆八个关键事件:高峰体验·低谷体验·转折点·最早的记忆·重要的童年记忆·重要的青春期记忆·重要的成年期记忆·其他重要记忆
3. 详细描述你生命中的几个重要人物
4. 拟写未来脚本，设想生命故事的未来
5. 总结当下困住你的压力源、问题和挑战
6. 了解自己的基本信念与价值观
7. 总结出自己的人生主题`}
              />
            </Card>
          </TabsContent>

          <TabsContent value="iceberg">
            <Card className="p-6 bg-white/90">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/4 space-y-4">
                  <h3 className="text-xl font-serif text-gray-800 mb-2">往 · 七步</h3>
                  <ul className="space-y-2">
                    {icebergSteps.forward.map((step, index) => (
                      <li 
                        key={index}
                        onClick={() => handleStepClick(step)}
                        className="p-4 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 text-gray-700 hover:shadow-md transform hover:scale-102 transition duration-300"
                      >
                        {index + 1}. {step.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-full max-w-md">
                    <Image
                      src="/冰山模型.jpg"
                      alt="Iceberg Model"
                      width={500}
                      height={600}
                      className="mx-auto"
                    />
                  </div>
                </div>

                <div className="lg:w-1/4 space-y-4">
                  <h3 className="text-xl font-serif text-gray-800 mb-2">返 · 七步</h3>
                  <ul className="space-y-2">
                    {icebergSteps.backward.map((step, index) => (
                      <li 
                        key={index}
                        onClick={() => handleStepClick(step)}
                        className="p-4 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 text-gray-700 hover:shadow-md transform hover:scale-102 transition duration-300"
                      >
                        {index + 1}. {step.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="fixed top-4 left-4 z-10">
        <Link href="/">
          <Button variant="ghost" size="icon" className="m-8 text-gray-600 hover:text-gray-900">
            <Home className="h-8 w-8" />
          </Button>
        </Link>
      </div>

      <div className="fixed bottom-4 right-4 z-10">
        <MeditationMusic />
      </div>

      <IcebergDialog
        isOpen={dialogState.isOpen}
        onClose={() => setDialogState(prev => ({ ...prev, isOpen: false }))}
        title={dialogState.title}
        content={dialogState.content}
      />
    </main>
  )
}
