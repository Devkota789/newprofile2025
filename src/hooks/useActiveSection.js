import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (!sectionIds?.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .forEach((entry) => {
            if (sectionIds.includes(entry.target.id)) {
              setActiveSection(entry.target.id)
            }
          })
      },
      {
        rootMargin: options.rootMargin ?? '-40% 0px -40% 0px',
        threshold: options.threshold ?? [0, 0.25, 0.5, 0.75, 1],
      },
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sectionIds, options.rootMargin, options.threshold])

  return activeSection
}

