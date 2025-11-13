import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function AnimatedCounter({
  from = 0,
  to = 100,
  duration = 1.2,
  suffix = '',
  className = 'text-3xl',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!isInView) return undefined

    let start = null
    const delta = to - from

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setValue(from + delta * progress)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    const animationId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationId)
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={`font-display font-semibold text-primary-600 ${className}`}>
      {Math.round(value)}
      {suffix}
    </span>
  )
}

