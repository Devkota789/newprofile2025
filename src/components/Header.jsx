import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isTop, setIsTop] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(NAV_LINKS.map((link) => link.id))

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY < 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <header className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur dark:bg-slate-950/95 ${isTop ? '' : 'shadow-sm'}`}>
      <div className="section-container flex items-center justify-between py-4">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-600">
          Nischal
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              className={`relative pb-1 transition-colors ${
                activeSection === link.id ? 'text-primary-600' : 'hover:text-primary-500'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <Motion.span
                  layoutId="nav-active"
                  className="absolute left-0 top-full h-[2px] w-full bg-primary-600"
                />
              )}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:text-primary-600 dark:border-slate-700 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:border-primary-500 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 dark:border-slate-700 dark:text-slate-300 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="section-container pt-0 pb-6">
              <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link.id)}
                      className={`w-full rounded-md px-3 py-2 text-left transition ${
                        activeSection === link.id ? 'bg-primary-50 text-primary-600 dark:bg-slate-900/80' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

