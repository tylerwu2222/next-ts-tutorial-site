import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const storyIDs = await res.json()
      return NextResponse.json(storyIDs)
}

// hypothetical POST, PUT