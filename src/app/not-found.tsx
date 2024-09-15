import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>404 | Not Found</h2>
      <p>That page does not exist</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}