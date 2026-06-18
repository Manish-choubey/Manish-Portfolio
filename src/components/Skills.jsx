import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Core MERN',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 90 },
      { name: 'Express.js', icon: SiExpress, level: 88 },
      { name: 'React', icon: FaReact, level: 92 },
      { name: 'Node.js', icon: FaNodeJs, level: 90 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'Redux', icon: SiRedux, level: 82 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 90 },
      { name: 'Docker', icon: FaDocker, level: 75 },
      { name: 'AWS', icon: FaAws, level: 70 },
      { name: 'Postman', icon: SiPostman, level: 88 },
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
            Technologies I work with to build modern web applications
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
