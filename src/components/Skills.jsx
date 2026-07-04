import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, level: 92 },
      { name: 'Next.js', icon: SiNextdotjs, level: 88 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'Redux Toolkit', icon: SiRedux, level: 86 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 90 },
      { name: 'Express.js', icon: SiExpress, level: 88 },
      { name: 'NestJS', icon: SiNestjs, level: 82 },
      { name: 'REST APIs', icon: FaNodeJs, level: 90 },
      { name: 'GraphQL', icon: SiGraphql, level: 82 },
      { name: 'WebSockets', icon: FaNodeJs, level: 84 },
    ],
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 90 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
      { name: 'MySQL', icon: SiMysql, level: 76 },
      { name: 'Redis', icon: SiRedis, level: 78 },
      { name: 'AWS S3', icon: FaAws, level: 75 },
      { name: 'Docker', icon: FaDocker, level: 78 },
    ],
  },
  {
    title: 'Engineering Practices',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 90 },
      { name: 'Jest', icon: SiJest, level: 82 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 70 },
      { name: 'CI/CD', icon: FaGitAlt, level: 76 },
      { name: 'OAuth 2.0', icon: FaNodeJs, level: 78 },
      { name: 'System Design', icon: FaNodeJs, level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The stack I use to build SaaS products, APIs, dashboards, and real-time systems
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="skill-card"
            >
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="skill-item"
                  >
                    <div className="skill-item-header">
                      <skill.icon className="skill-icon" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                      />
                    </div>
                    <span className="skill-percent">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
