import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ProjectDetail } from 'app/components/projects/project-detail'
import { getProject, getProjects } from 'app/projects/data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.name,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
