import {
  SiCss3,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si'

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications with modern frontend tools.',
    skills: [
      { name: 'React', level: 92, icon: SiReact },
      { name: 'JavaScript (ES6+)', level: 90, icon: SiJavascript },
      { name: 'HTML5', level: 96, icon: SiHtml5 },
      { name: 'CSS3', level: 92, icon: SiCss3 },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & Animation',
    description: 'Creating elegant and smooth user interfaces using modern styling frameworks and animations.',
    skills: [
      { name: 'Tailwind CSS', level: 94, icon: SiTailwindcss },
      { name: 'Framer Motion / AOS', level: 85, icon: SiFramer },
      { name: 'Figma (UI Design)', level: 88, icon: SiFigma },
    ],
  },
  {
    id: 'tooling',
    title: 'Tools & Workflow',
    description: 'Optimizing development through version control, modern build tools, and collaboration.',
    skills: [
      { name: 'Git & GitHub', level: 93, icon: SiGit },
      { name: 'Vite', level: 87, icon: SiVite },
      { name: 'Node.js & MongoDB (Basic)', level: 75, icon: SiNodedotjs },
    ],
  },
]
