import Link from 'next/link'

import type { Project } from 'app/projects/data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="mb-6 flex flex-col space-y-1"
    >
      <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
        <p className="w-[140px] tabular-nums text-neutral-600 dark:text-neutral-400">
          {project.timeframe}
        </p>
        <div className="min-w-0 flex-1">
          <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.name}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.summary}
          </p>
        </div>
      </div>
    </Link>
  )
}
