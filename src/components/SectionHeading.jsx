import { motion as Motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function SectionHeading({ eyebrow, title, subtitle }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="mx-auto max-w-3xl text-center space-y-4">
      <Motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary-600"
      >
        {eyebrow}
      </Motion.span>
      <Motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="font-display text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl"
      >
        {title}
      </Motion.h2>
      {subtitle && (
        <Motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-slate-600 dark:text-slate-300"
        >
          {subtitle}
        </Motion.p>
      )}
    </div>
  )
}

