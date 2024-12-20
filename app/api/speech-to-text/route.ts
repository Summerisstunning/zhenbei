import { NextResponse } from "next/server"
import OpenAI from "openai"

// 创建 OpenAI 客户端实例
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "OpenAI API key not configured" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    const formData = await request.formData()
    const audioFile = formData.get("audio") as Blob

    if (!audioFile) {
      return new Response(
        JSON.stringify({ error: "No audio file provided" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }

    // 将 Blob 转换为 Buffer
    const audioBuffer = Buffer.from(await audioFile.arrayBuffer())

    // 创建临时文件
    const file = new File([audioBuffer], "audio.wav", {
      type: audioFile.type || "audio/wav",
    })

    // 调用 OpenAI API
    const transcription = await openai.audio.transcriptions.create({
      file: file,
      model: "whisper-1",
      language: "zh",
    })

    return new Response(
      JSON.stringify({ text: transcription.text }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

  } catch (error: any) {
    console.error("Error in speech-to-text:", error)
    return new Response(
      JSON.stringify({ error: error.message || "Error processing audio" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
}

// 配置较大的请求体限制
export const config = {
  api: {
    bodyParser: false,
  },
}
