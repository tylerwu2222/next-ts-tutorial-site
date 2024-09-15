

// get all todos from mockapi
export async function GET() {
    const res = await fetch('https://66e366cd494df9a478e51d2e.mockapi.io/api/todos', {
          headers: {
            'Content-Type': 'application/json',
          },
    })
    console.log('getting todos', res);
    const data = await res.json()
    console.log(data);
    return Response.json({ data })
}