import { Icon } from './icons.jsx'

export default function SkillCard({ icon, title, items }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400"><Icon name={icon} size={22} /></span>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s} className="rounded-full border border-cyan-400/20 bg-navy-900 px-3 py-1 text-sm text-slate-200">{s}</li>
        ))}
      </ul>
    </article>
  )
}
