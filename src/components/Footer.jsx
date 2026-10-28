import { Mail } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import { GithubIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-400">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-slate-300 hover:text-cyan-400"><GithubIcon className="h-6 w-6" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Send email" className="text-slate-300 hover:text-cyan-400"><Mail /></a>
        </div>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
