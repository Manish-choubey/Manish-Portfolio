# MERN Stack Developer Portfolio

A modern, advanced portfolio website built with React, showcasing MERN stack development skills. Features smooth animations, responsive design, and a professional layout.

## Features

- **Hero Section** – Eye-catching intro with MERN tech stack icons
- **About** – Professional bio with highlight cards
- **Skills** – Animated skill bars (MongoDB, Express, React, Node.js, and more)
- **Projects** – Featured project cards with hover effects and tech tags
- **Contact** – Contact form with info and social links
- **Responsive** – Mobile-first design with hamburger menu
- **Animations** – Framer Motion for smooth scroll and hover effects
- **Dark Theme** – Cyan/teal accent on dark background

## Tech Stack

- React 18
- Vite
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

1. **Personal Info** – Update name, email, location, and social links in `src/components/Hero.jsx` and `src/components/Contact.jsx`
2. **Projects** – Edit the `projects` array in `src/components/Projects.jsx` with your real projects
3. **Skills** – Adjust skill levels and categories in `src/components/Skills.jsx`
4. **Colors** – Modify CSS variables in `src/index.css` (`:root`)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT
