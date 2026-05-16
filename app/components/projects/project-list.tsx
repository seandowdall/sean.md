import { getProjects } from 'app/projects/data'

import { ProjectCard } from './project-card'

export function ProjectList() {
  const projects = getProjects()

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
