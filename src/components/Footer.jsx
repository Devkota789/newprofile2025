import { FiGithub, FiLinkedin, FiTwitter ,FiInstagram,FiFacebook} from 'react-icons/fi'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nischal-18-devkota/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/Devkota789', icon: FiGithub },
  
  { label: 'Facebook', href: 'https://www.facebook.com/nischal.devkota.116283', icon: FiFacebook },
  {label: 'Instagram', href: 'https://www.instagram.com/nischal_devkota_/', icon: FiInstagram }
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="section-container flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary-500">
            Nischal Devkota
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Building meaningful digitall experiences with React, motion, and care.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-primary-500">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-500 dark:border-slate-800"
                aria-label={social.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-4 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        © {new Date().getFullYear()}  Nischal Devkota All rights reserved.
      </div>
    </footer>
  )
}

