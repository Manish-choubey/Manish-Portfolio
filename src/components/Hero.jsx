import { motion } from 'framer-motion'
import { HiArrowDown, HiCode, HiDownload } from 'react-icons/hi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'
import TypingEffect from './TypingEffect'

const techIcons = [
  { Icon: FaReact, label: 'React', delay: 0 },
  { Icon: FaNodeJs, label: 'Node.js', delay: 0.1 },
  { Icon: SiMongodb, label: 'MongoDB', delay: 0.2 },
  { Icon: SiExpress, label: 'Express', delay: 0.3 },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [-20, -100],
                x: Math.sin(i) * 30,
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge"
        >
          <HiCode className="hero-badge-icon" />
          <span>MERN Stack Developer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-title"
        >
          Hi, I'm <span className="hero-name">Manish</span>
          <br />
          <TypingEffect />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-desc"
        >
          I craft scalable web applications with MongoDB, Express, React & Node.js.
          Turning ideas into performant, user-centric digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-actions"
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
          <a href="/resume.pdf" download className="btn btn-ghost">
            <HiDownload />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hero-tech"
        >
          {techIcons.map(({ Icon, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + delay, type: 'spring', stiffness: 200 }}
              className="hero-tech-item"
              title={label}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hero-scroll"
        >
          <HiArrowDown />
        </motion.a>
      </div>
    </section>
  )
}
