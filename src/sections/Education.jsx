import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData.js'
import SectionTitle from '../components/SectionTitle.jsx'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-navy-950/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="04. Education" title="Education" id="education-title" />
        <article className="flex max-w-2xl gap-5 rounded-2xl border border-white/10 border-l-4 border-l-cyan-400 bg-navy-800/60 p-6">
          <span className="h-fit rounded-lg bg-cyan-400/10 p-3 text-cyan-400"><GraduationCap aria-hidden="true" /></span>
          <div>
            <h3 className="text-xl font-semibold text-white">{education.institution}</h3>
            <p className="mt-1 text-cyan-300">{education.field}</p>
            <p className="mt-2 text-sm">{education.level} · {education.country}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
