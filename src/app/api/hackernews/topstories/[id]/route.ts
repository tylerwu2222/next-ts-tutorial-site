import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json?print=pretty`)
    const storyContent = await res.json()
    return NextResponse.json(storyContent)
}
