import { motion } from 'framer-motion'
import { HiLightningBolt, HiCode, HiCube } from 'react-icons/hi'

const highlights = [
  {
    icon: HiCode,
    title: 'SaaS Delivery',
    desc: '3+ years shipping scalable SaaS and enterprise products across frontend, backend, and APIs.',
  },
  {
    icon: HiCube,
    title: 'System Ownership',
    desc: 'Comfortable owning features end-to-end, from API design and database models to responsive UI.',
  },
  {
    icon: HiLightningBolt,
    title: 'Performance Focus',
    desc: 'Improved API response time, bundle size, rendering performance, and query throughput in production apps.',
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
            Full-stack engineer focused on reliable, maintainable product systems
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
              I'm Manish Choubey, a Full-Stack Developer with 3+ years of experience
              designing and shipping scalable SaaS and enterprise applications. I work
              across the MERN stack, Next.js, TypeScript, GraphQL, and cloud-ready
              infrastructure.
            </p>
            <p className="about-text">
              My work includes reusable React component systems, REST and GraphQL APIs,
              MongoDB optimization, WebSocket-powered real-time features, JWT auth, and
              CI/CD workflows. I like building clean systems that stay understandable as
              teams and products grow.
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
