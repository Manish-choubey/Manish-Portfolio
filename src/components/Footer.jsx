import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Manish</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-text">
          Full-Stack Developer - MERN, Next.js, TypeScript, and cloud-ready systems
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">&copy; {year} Manish Choubey. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}
