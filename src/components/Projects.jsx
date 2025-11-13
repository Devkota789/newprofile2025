import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import { SectionHeading } from './SectionHeading.jsx'
import { projects } from '../data/projects.js'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-container space-y-12 py-16 md:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work that highlights my process"
        subtitle="Each project blends strategy, UI craftsmanship, and engineering rigour to deliver engaging product experiences."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="card flex h-full flex-col overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <Motion.img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 p-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-500"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <FiExternalLink className="text-lg" />
                  Live
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <FiGithub className="text-lg" />
                  Code
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="ml-auto text-sm font-semibold text-primary-600 underline-offset-2 hover:underline"
                >
                  Details
                </button>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-950"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="Close project details"
              >
                <FiX className="text-lg" />
              </button>
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                <div className="space-y-4">
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} hero`}
                    className="w-full rounded-2xl border border-white/10 object-cover shadow-lg dark:border-white/5"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                      Highlights
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {selectedProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      <FiExternalLink className="text-lg" />
                      Visit live project
                    </a>
                    <a
                      href={selectedProject.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                    >
                      <FiGithub className="text-lg" />
                      View repository
                    </a>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

