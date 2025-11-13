# Aarav Sainju — React Portfolio

A fully responsive, minimal portfolio for a frontend developer. Built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. The site keeps the structure professional while dialling back to clean typography, simple spacing, and just enough motion to feel polished.

## ✨ Features

- Sticky navigation with active link highlighting and dark/light mode toggle.
- Hero, About, Skills, Projects, Contact, and Footer sections built with small, reusable components.
- Subtle scroll and reveal animations using Framer Motion (kept intentionally light).
- Minimal project grid with quick links plus optional modal details.
- Accessible contact form with inline validation, animated submit state, and social links.
- Global smooth scrolling, refined Tailwind theme, and a clean, content-first layout.

## 🧱 Tech Stack

- **React 19** with **Vite** for fast, modern development.
- **Tailwind CSS 3** for utility-first styling and configurable design tokens.
- **Framer Motion** for motion primitives, transitions, and animate presence.
- **React Icons** for consistent iconography.

## 📦 Getting Started

Clone this repository, install dependencies, and fire up the development server:

```bash
npm install
npm run dev
```

Vite will print a local development URL (typically http://localhost:5173). The app supports hot module replacement for rapid iteration.

## 🏗️ Project Structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   ├── profile-portrait.svg
│   │   └── projects/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   └── hooks/
│       └── useActiveSection.js
└── vite.config.js
```

## 🛠️ Tailwind Setup

The Tailwind configuration (`tailwind.config.js`) enables class-based dark mode and extends fonts, colors, shadows, and background utilities. Global styles live in `src/index.css`, which layers Tailwind with custom utility classes used across the components.

## 🚀 Building for Production

```bash
npm run build
npm run preview
```

`npm run build` outputs an optimised production bundle in `dist/`, and `npm run preview` serves that bundle locally for final verification.

## 📄 License

This project is provided as an open portfolio template. Feel free to adapt it with your own content, imagery, and branding.
