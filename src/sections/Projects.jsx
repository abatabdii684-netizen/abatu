import { projects } from '../data/portfolioData.js'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="03. Projects" title="Featured Projects" id="projects-title" />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}
