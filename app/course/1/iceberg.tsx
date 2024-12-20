"use client"

import { useEffect, useRef } from "react"

export default function IcebergModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 设置画布大小
    canvas.width = 500
    canvas.height = 600

    // 绘制水面
    ctx.fillStyle = "#E3F2FD"
    ctx.fillRect(0, 0, canvas.width, canvas.height * 0.3)

    // 绘制水下
    ctx.fillStyle = "#1565C0"
    ctx.fillRect(0, canvas.height * 0.3, canvas.width, canvas.height * 0.7)

    // 绘制冰山
    ctx.beginPath()
    ctx.moveTo(150, 50) // 冰山顶部
    ctx.lineTo(350, 50)
    ctx.lineTo(400, canvas.height * 0.3) // 水面
    ctx.lineTo(450, canvas.height * 0.5)
    ctx.lineTo(400, canvas.height * 0.7)
    ctx.lineTo(300, canvas.height * 0.9)
    ctx.lineTo(200, canvas.height * 0.9)
    ctx.lineTo(100, canvas.height * 0.7)
    ctx.lineTo(50, canvas.height * 0.5)
    ctx.lineTo(100, canvas.height * 0.3)
    ctx.closePath()

    // 填充冰山
    ctx.fillStyle = "#FFFFFF"
    ctx.fill()

    // 添加阴影效果
    ctx.shadowColor = "rgba(0, 0, 0, 0.2)"
    ctx.shadowBlur = 10
    ctx.shadowOffsetX = 5
    ctx.shadowOffsetY = 5

    // 绘制冰山轮廓
    ctx.strokeStyle = "#90CAF9"
    ctx.lineWidth = 2
    ctx.stroke()

    // 添加水平分隔线
    ctx.beginPath()
    ctx.strokeStyle = "#FFFFFF"
    ctx.setLineDash([5, 5])
    ctx.moveTo(0, canvas.height * 0.3)
    ctx.lineTo(canvas.width, canvas.height * 0.3)
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} className="max-w-full h-auto" />
}
