import { about } from '../data/portfolioData.js'
import SectionTitle from '../components/SectionTitle.jsx'
import { Icon } from '../components/icons.jsx'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="01. About" title="About Me" id="about-title" />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 leading-relaxed lg:col-span-3">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="space-y-4 lg:col-span-2">
            <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-slate-200">{about.summary}</p>
            {about.highlights.map((h) => (
              <div key={h.title} className="flex gap-4 rounded-2xl border border-white/10 bg-navy-800/60 p-5 transition hover:border-cyan-400/40">
                <span className="h-fit rounded-lg bg-cyan-400/10 p-2 text-cyan-400"><Icon name={h.icon} size={22} /></span>
                <div><h3 className="font-semibold text-white">{h.title}</h3><p className="text-sm">{h.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
