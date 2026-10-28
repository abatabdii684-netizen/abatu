import { skillCategories } from '../data/portfolioData.js'
import SectionTitle from '../components/SectionTitle.jsx'
import SkillCard from '../components/SkillCard.jsx'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-navy-950/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="02. Skills" title="Technical Skills" id="skills-title" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((c) => <SkillCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  )
}
