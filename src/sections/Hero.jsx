import { ArrowRight } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import { GithubIcon } from '../components/icons.jsx'

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_55%)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div className="reveal order-2 md:order-1">
          <p className="font-mono text-cyan-400">Hello, I'm</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{profile.heroText}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-navy-900 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20">View My Projects <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="#contact" className="rounded-lg border border-cyan-400/60 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10">Contact Me</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-2 text-slate-300 transition hover:text-cyan-400"><GithubIcon className="h-7 w-7" /></a>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 p-1 shadow-2xl shadow-cyan-500/20">
            {profile.image ? (
              <img src={profile.image} alt={`Portrait of ${profile.name}`} className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72" />
            ) : (
              <div role="img" aria-label={`${profile.name} initials`} className="flex h-56 w-56 items-center justify-center rounded-full bg-navy-800 text-6xl font-bold text-cyan-400 sm:h-72 sm:w-72 sm:text-7xl">AA</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
