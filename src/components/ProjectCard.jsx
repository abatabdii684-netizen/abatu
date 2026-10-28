import { ExternalLink } from 'lucide-react'
import { Icon, GithubIcon } from './icons.jsx'

const btn = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition'

export default function ProjectCard({ project }) {
  const { title, description, tech, icon, image, imageAlt, repo, repoLabel } = project
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-800/60 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
      {image ? (
        <img src={image} alt={imageAlt} loading="lazy" className="h-44 w-full object-cover" />
      ) : (
        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900 text-cyan-400">
          <Icon name={icon} size={56} strokeWidth={1.5} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-300">{description}</p>
        {tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
            {tech.map((t) => (
              <li key={t} className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">{t}</li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          {repo ? (
            <a href={repo} target="_blank" rel="noopener noreferrer" className={`${btn} bg-cyan-400 text-navy-900 hover:bg-cyan-300`}>
              <GithubIcon className="h-4 w-4" /> {repoLabel}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : (
            <span className={`${btn} border border-white/10 text-slate-400`}>Source link coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}
