import { Metadata } from 'next'
import { ProjectList } from 'app/components/projects/project-list'

export const metadata: Metadata = {
  title: `Projects`,
  description: 'A selection of projects I have built.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <ProjectList />
    </section>
  )
}
