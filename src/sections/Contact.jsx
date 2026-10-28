import { Mail } from 'lucide-react'
import { profile } from '../data/portfolioData.js'
import SectionTitle from '../components/SectionTitle.jsx'
import { GithubIcon } from '../components/icons.jsx'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <SectionTitle eyebrow="05. Contact" title="Get In Touch" id="contact-title" />
        <p className="text-lg leading-relaxed">I'm open to internships, collaborations, and development opportunities. Whether you have a project in mind or just want to say hello, my inbox is open.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-navy-900 transition hover:bg-cyan-300"><Mail size={18} aria-hidden="true" /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/60 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"><GithubIcon className="h-5 w-5" /> GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-400/60 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10">LinkedIn</a>}
        </div>
      </div>
    </section>
  )
}
