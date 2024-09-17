import { NextResponse } from "next/server";
import { prisma } from '@/app/lib/prisma';

// const prisma = new PrismaClient();

export async function GET() {
    const birds = await prisma.birds.findMany();
    // console.log('birds res', birds);
    return NextResponse.json(birds, { status: 200 })
}