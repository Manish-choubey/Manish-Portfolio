import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Tech Company',
    period: '2023 – Present',
    desc: 'Building scalable web applications with MERN stack. Led development of e-commerce platform serving 10K+ users. Implemented REST APIs, real-time features, and CI/CD pipelines.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    id: 2,
    role: 'MERN Stack Developer',
    company: 'Startup Inc',
    period: '2021 – 2023',
    desc: 'Developed full-stack features for SaaS product. Collaborated with design team on UI/UX. Optimized database queries and improved API response times by 40%.',
    tech: ['React', 'Express', 'MongoDB', 'Redux'],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    period: '2020 – 2021',
    desc: 'Built responsive websites and web apps. Worked with React and Node.js. Contributed to team codebase and followed agile methodologies.',
    tech: ['React', 'Node.js', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey in web development
          </p>
        </motion.div>

        <div className="experience-timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="experience-card"
            >
              <div className="timeline-dot">
                <HiBriefcase />
              </div>
              <div className="experience-content">
                <span className="experience-period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-desc">{exp.desc}</p>
                <div className="experience-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="experience-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
