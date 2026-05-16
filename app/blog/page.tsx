import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Sean's blog`,
  description: 'Writing, soon.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My blog</h1>
      <p>I plan to start writing here soon. Nothing published yet.</p>
    </section>
  )
}
