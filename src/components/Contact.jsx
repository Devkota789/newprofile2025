import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiInstagram , FiTwitter,FiFacebook } from 'react-icons/fi'
import { SectionHeading } from './SectionHeading.jsx'
import { FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/nischal-18-devkota/',
  },
  {
    label: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Devkota789',
  },
  {
    label: 'Facebook',
    icon: FiFacebook,
    url: 'https://www.facebook.com/nischal.devkota.116283',
  },
  {
    label: 'Whatsapp',
    icon: FaWhatsapp,
    url: 'https://wa.me/+977984649522',
  },
  {
    label : 'Instagram',
    icon : FiInstagram,
    url : 'https://www.instagram.com/nischal_devkota_',
  }
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Your name helps me personalise the response.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Please share the best email to reach you.'
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'That email address looks incorrect — mind giving it another look?'
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Let me know how I can help or what you’d like to collaborate on.'
    }
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <section id="contact" className="section-container space-y-12 py-16 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something remarkable together"
        subtitle="Whether you have a project in mind, want to collaborate, or just say hello — my inbox is always open."
      />

      <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary-600">
            <FiMail />
            Drop me a line
          </div>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            I typically respond within two business days. Provide as much context as you can so I can
            prepare relevant ideas before we chat.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:bg-slate-900 dark:text-slate-200 ${
                  errors.name ? 'border-rose-300' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-rose-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@email.com"
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:bg-slate-900 dark:text-slate-200 ${
                  errors.email ? 'border-rose-300' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-rose-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and goals."
                className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:bg-slate-900 dark:text-slate-200 ${
                  errors.message ? 'border-rose-300' : 'border-slate-200 dark:border-slate-700'
                }`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-xs text-rose-500">
                  {errors.message}
                </p>
              )}
            </div>

            <Motion.button
              type="submit"
              className="btn-primary w-full justify-center"
              whileTap={{ scale: 0.98 }}
              disabled={status === 'submitting'}
            >
              <FiSend className="text-lg" />
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </Motion.button>
            {status === 'success' && (
              <Motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-semibold text-primary-500"
              >
                Message sent! I&apos;ll be in touch very soon.
              </Motion.p>
            )}
          </form>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
              Prefer a direct email?
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              You can reach me any time at{' '}
              <a
                href="mailto:hello@aaravsainju.dev"
                className="font-medium text-primary-500 underline-offset-4 hover:underline"
              >
                devkotanischal0@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              Socials
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-primary-600 dark:text-slate-300"
                    >
                      <span>{link.label}</span>
                      <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary-500">
                        Connect
                        <Icon className="text-base" />
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

