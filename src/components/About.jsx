import { motion } from 'framer-motion'
import { HiLightningBolt, HiCode, HiCube } from 'react-icons/hi'

const highlights = [
  {
    icon: HiCode,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code with best practices and design patterns.',
  },
  {
    icon: HiCube,
    title: 'Full-Stack',
    desc: 'End-to-end development from database design to polished UI/UX.',
  },
  {
    icon: HiLightningBolt,
    title: 'Performance',
    desc: 'Optimized applications for speed, SEO, and seamless user experience.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer building the web, one line at a time
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image"
          >
            <div className="about-image-inner">
              <div className="about-image-placeholder">
                <span>MERN</span>
              </div>
              <div className="about-image-frame" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <p className="about-text">
              I'm a MERN Stack Developer with a passion for building robust, scalable web applications.
              My journey in web development has equipped me with expertise across the entire stack —
              from designing MongoDB schemas to crafting responsive React interfaces.
            </p>
            <p className="about-text">
              I thrive on solving complex problems and turning ideas into production-ready solutions.
              Whether it's RESTful APIs, real-time features, or pixel-perfect UIs, I bring dedication
              and attention to detail to every project.
            </p>

            <div className="about-highlights">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="about-highlight"
                >
                  <item.icon className="about-highlight-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
