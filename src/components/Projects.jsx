import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode, HiX } from 'react-icons/hi'

const allTech = ['All', 'React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Socket.io', 'Stripe', 'Chart.js', 'JWT']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce with cart, checkout, payment integration, and admin dashboard.',
    longDesc: 'A complete e-commerce solution built from scratch. Features include product catalog, shopping cart, Stripe payment integration, order management, and a comprehensive admin dashboard for inventory and analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    desc: 'Real-time collaborative task manager with drag-drop, teams, and activity tracking.',
    longDesc: 'Real-time collaborative platform with WebSocket integration. Users can create boards, assign tasks, drag-and-drop between columns, and track team activity with live updates.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    desc: 'Analytics dashboard with charts, user management, and content scheduling.',
    longDesc: 'Comprehensive analytics platform with interactive charts, user segmentation, content scheduling, and performance metrics. Built with Chart.js for data visualization.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'REST API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Blog CMS',
    desc: 'Headless CMS for blogs with markdown support, SEO, and comment system.',
    longDesc: 'Modern headless CMS with markdown editor, SEO optimization, comment system with moderation, and RESTful API for content delivery to any frontend.',
    tech: ['React', 'Express', 'MongoDB', 'Markdown', 'Auth0'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    live: '#',
    github: '#',
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
            <a href={project.live} className="project-link" title="Live Demo" onClick={(e) => e.stopPropagation()}>
              <HiExternalLink />
            </a>
            <a href={project.github} className="project-link" title="Source Code" onClick={(e) => e.stopPropagation()}>
              <HiCode />
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
            A selection of projects showcasing my MERN stack expertise
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

        <motion.div
          className="projects-grid"
          layout
        >
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
                  <a href={modalProject.live} className="btn btn-primary">
                    <HiExternalLink /> Live Demo
                  </a>
                  <a href={modalProject.github} className="btn btn-outline">
                    <HiCode /> Source Code
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
