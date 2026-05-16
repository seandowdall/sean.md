import type { Project } from 'app/projects/data'

import { ProjectGallery } from './project-gallery'

type ProjectSectionProps = {
  title: string
  items: string[]
}

function ProjectSection({ title, items }: ProjectSectionProps) {
  return (
    <div>
      <h2 className="mb-2 text-base font-medium tracking-tight">{title}</h2>
      <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200">
        {items.map((item) => (
          <li key={item} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <section>
      <div>
        <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
          {project.name}
        </h1>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          {project.timeframe}
          {project.status ? ` · ${project.status}` : ''}
        </p>
        <p className="mb-4 text-neutral-800 dark:text-neutral-200">{project.summary}</p>
      </div>

      <div className="space-y-4">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <ProjectSection title="Highlights" items={project.highlights} />
        <ProjectSection title="Technologies" items={project.technologies} />
      </div>

      {project.images?.length ? (
        <div className="mt-8">
          <ProjectGallery images={project.images} />
        </div>
      ) : null}

      {project.links?.length ? (
        <div className="mt-8">
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
