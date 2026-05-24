import { getProjects } from 'app/projects/data'

import { ProjectCard } from './project-card'

export function ProjectList() {
  const projects = getProjects()

  return (
    <div className="space-y-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
