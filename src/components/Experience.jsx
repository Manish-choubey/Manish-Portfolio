import { motion } from 'framer-motion'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Solutionchamps Pvt. Ltd.',
    period: 'Apr 2025 - Present',
    location: 'Coimbatore',
    desc: 'Architected and shipped web applications serving 10,000+ concurrent users. Optimized queries and caching to reduce average API response time by 30%, designed REST and GraphQL APIs, and built a reusable React + TypeScript component library used across 3 product modules.',
    tech: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'GraphQL'],
  },
  {
    id: 2,
    role: 'Senior Fullstack Developer',
    company: 'Valluva HR & Payroll Solutions Pvt. Ltd.',
    period: 'Nov 2024 - Apr 2025',
    location: 'Singapore',
    desc: 'Enhanced a multi-tenant HR and payroll platform using React.js, Next.js, and Tailwind CSS. Migrated state from Context API to Redux Toolkit and integrated 8+ REST endpoints with robust error handling, retry logic, and optimistic UI updates.',
    tech: ['Next.js', 'React', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 3,
    role: 'Fullstack Developer',
    company: 'Sival Devops Software Pvt. Ltd.',
    period: 'Jan 2024 - Sep 2024',
    location: 'India',
    desc: 'Built and maintained MERN-stack applications with WebSocket-powered live notifications and chat. Implemented JWT authentication with refresh-token rotation, role-based access control, Dockerized services, and basic CI/CD pipelines.',
    tech: ['MERN', 'WebSockets', 'JWT', 'Docker', 'CI/CD'],
  },
  {
    id: 4,
    role: 'Software Developer',
    company: 'Qloron Technology',
    period: 'May 2023 - Nov 2023',
    location: 'India',
    desc: 'Developed full-stack features for a MERN application serving SME clients. Introduced unit tests that helped reduce customer-reported bugs by 15% and improved confidence around business-critical flows.',
    tech: ['React', 'Node.js', 'MongoDB', 'Jest', 'Git'],
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
            Recent roles building SaaS, enterprise dashboards, APIs, and real-time systems
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
                <p className="experience-company">
                  {exp.company} - {exp.location}
                </p>
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
