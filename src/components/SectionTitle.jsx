export default function SectionTitle({ eyebrow, title, id }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-cyan-400">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
    </div>
  )
}
