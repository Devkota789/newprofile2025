import { motion as Motion } from 'framer-motion'
import { FiGithub, FiPlayCircle } from 'react-icons/fi'
import profilePortrait from '../assets/pppppp.jpeg'

export function Hero() {
  return (
    <section
      id="home"
      className="section-container flex flex-col gap-12 py-16 md:flex-row md:items-center md:py-24"
    >
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary-600">
          Hello, I&apos;m
        </span>
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          Nischal Devkota
        </h1>
        <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
          I design and build simple, fast, and accessible interfaces with React. My work balances
          thoughtful design decisions with clean implementation, so teams can ship confidently.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn-primary">
            <FiPlayCircle className="text-lg" />
            View projects
          </a>
          <a
            href="https://github.com/Devkota789"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FiGithub className="text-lg" />
            GitHub
          </a>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="flex-1 flex justify-center"
>
  <div className="relative w-96 h-96 sm:w-104 sm:h-104 rounded-full overflow-hidden shadow-2xl border-4 border-primary-500">
    <img
      src={profilePortrait}
      alt="Portrait of Nischal Devkota"
      className="w-full h-full object-cover object-center"
    />
  </div>
      </Motion.div>
    </section>
  )
}

