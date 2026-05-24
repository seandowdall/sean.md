import Link from 'next/link'

import type { Project } from 'app/projects/data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block py-2 focus-visible:outline-none"
    >
      <div className="flex w-full flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <p className="tracking-tight text-neutral-900 underline-offset-4 group-hover:underline group-focus-visible:underline dark:text-neutral-100">
              {project.name}
          </p>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            {project.summary}
          </p>
        </div>
        <p className="shrink-0 tabular-nums text-neutral-500 dark:text-neutral-500 md:pt-0.5 md:text-right">
          {project.timeframe}
        </p>
      </div>
    </Link>
  )
}
