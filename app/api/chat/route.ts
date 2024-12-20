import { NextResponse } from "next/server"

export async function POST(request: Request) {
  return NextResponse.json(
    { error: "Chat API is not implemented" },
    { status: 501 }
  )
}
