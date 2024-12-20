import { NextResponse } from "next/server"

export const runtime = 'edge'

export async function POST(request: Request) {
  return new Response(
    JSON.stringify({ error: "API not implemented" }),
    {
      status: 501,
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
