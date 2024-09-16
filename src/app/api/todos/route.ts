import { NextResponse } from 'next/server';

// get all todos from mockapi
export async function GET() {
  const res = await fetch('https://66e366cd494df9a478e51d2e.mockapi.io/api/todos', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  // this will log in the vscode (server) console
  // console.log('MOCKAPI data', data[0]);
  return NextResponse.json(data)
}