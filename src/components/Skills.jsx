import { motion as Motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from './SectionHeading.jsx'
import { skillGroups } from '../data/skills.js'

function SkillBar({ level }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
      <Motion.span
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-y-0 left-0 rounded-full bg-primary-500"
      />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-container space-y-12 py-16 md:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for every day"
        subtitle="A focused set of technologies that help me build dependable, maintainable interfaces."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Motion.div
            key={group.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 * groupIndex }}
            className="card flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display text-xl font-semibold">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{group.description}</p>
            </div>

            <ul className="space-y-5">
              {group.skills.map((skill, skillIndex) => {
                const Icon = skill.icon
                return (
                  <Motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.05 * skillIndex }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-slate-800">
                          <Icon className="text-lg" />
                        </span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mt-3">
                      <SkillBar level={skill.level} />
                    </div>
                  </Motion.li>
                )
              })}
            </ul>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}

