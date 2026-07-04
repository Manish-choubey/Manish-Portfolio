import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiX } from 'react-icons/hi'

const allTech = ['All', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Redux', 'TypeScript', 'Express', 'OAuth']

const projects = [
  {
    id: 1,
    title: 'NXGEN Scale Drivers',
    desc: 'Enterprise IoT and video surveillance dashboard for managing 1,000+ connected devices.',
    longDesc: 'Contributed frontend development for a cloud-based platform managing IoT devices, cameras, and audio sensors through a unified dashboard. Built typed React components, modeled complex device-state interfaces, used Redux Toolkit for app-wide state, and applied lazy loading plus code splitting to improve Time-to-Interactive by about 35%.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redux', 'OAuth'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=560&fit=crop',
    live: 'https://nxgen.io/',
  },
  {
    id: 2,
    title: 'Zunia',
    desc: 'School management SaaS platform with attendance, marks, and report generation services.',
    longDesc: 'Built core backend microservices in Node.js for attendance, marks, and report generation modules serving multiple school tenants. Added unit tests around grade computation and attendance percentage logic, reaching 80%+ coverage on owned services, and collaborated across Node.js, Java Spring Boot, and .NET services through a shared API contract.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=560&fit=crop',
    live: 'https://educationhorizons.com/solutions/zunia/',
  },
]

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="project-card"
      onClick={() => onOpen(project)}
    >
      <div className="project-card-inner">
        <div className="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="project-overlay">
            <a href={project.live} className="project-link" title="Product Link" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
              <HiExternalLink />
            </a>
            <button
              className="project-link project-link-details"
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
              title="View Details"
              type="button"
            >
              Details
            </button>
          </div>
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [modalProject, setModalProject] = useState(null)

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.tech.includes(filter))

  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [modalProject])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Resume-backed projects across IoT, video surveillance, and school management SaaS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          {allTech.map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setModalProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setModalProject(null)}
                aria-label="Close"
              >
                <HiX />
              </button>
              <div className="modal-image">
                <img src={modalProject.image} alt={modalProject.title} />
              </div>
              <div className="modal-content">
                <h3>{modalProject.title}</h3>
                <p className="modal-desc">{modalProject.longDesc}</p>
                <div className="modal-tech">
                  {modalProject.tech.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="modal-actions">
                  <a href={modalProject.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <HiExternalLink /> Product Link
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
