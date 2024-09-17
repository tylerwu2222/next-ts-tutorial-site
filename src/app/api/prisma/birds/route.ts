import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET() {
    const res = await prisma.birds.findMany();
    return NextResponse.json(res)
}

// hypothetical POST, PUT