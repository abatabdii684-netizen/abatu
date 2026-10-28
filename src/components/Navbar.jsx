import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const link = (id) =>
    `rounded px-3 py-2 text-sm font-medium transition hover:text-cyan-300 ${active === id ? 'text-cyan-400' : 'text-slate-300'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/85 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-mono text-lg font-bold text-white">
          Abatu<span className="text-cyan-400">.dev</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={link(id)} aria-current={active === id ? 'true' : undefined}>{label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded p-2 text-slate-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 bg-navy-900 px-5 py-3 md:hidden">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block ${link(id)}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
      <span className="sr-only">{profile.name}</span>
    </header>
  )
}
