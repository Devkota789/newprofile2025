import { motion as Motion } from 'framer-motion'
import { FiAward, FiTrendingUp } from 'react-icons/fi'
import { AnimatedCounter } from './AnimatedCounter.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const stats = [
  { id: 'experience', label: 'Years of experience', value: 1, suffix: '+', icon: FiAward },
  { id: 'projects', label: 'Projects delivered', value: 5, suffix: '+', icon: FiTrendingUp },
]

export function About() {
  return (
    <section id="about" className="section-container space-y-12 py-16 md:py-20">
      <SectionHeading
        eyebrow="About"
        title="Frontend Developer & BSc CSIT Student"
        subtitle="I create modern, responsive web applications and connect ideas to solutions."
      />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="card space-y-6"
      >
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I am Nischal Devkota, a BSc CSIT student at Mount Annapurna College with a passion for
          coding, gaming, and building web solutions. My expertise lies in creating scalable and
          interactive front-end experiences using modern technologies like React.js.
        </p>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I focus on crafting clean, maintainable code, collaborating with teams effectively, and
          ensuring every project I deliver meets both functional and aesthetic standards.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-slate-800">
                  <Icon />
                </span>
                <div>
                  <AnimatedCounter from={0} to={item.value} suffix={item.suffix} />
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Motion.div>
    </section>
  )
}
