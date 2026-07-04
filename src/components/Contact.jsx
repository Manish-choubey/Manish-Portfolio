import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'manishchoubey7071@gmail.com', href: 'mailto:manishchoubey7071@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'India', href: null },
  { icon: HiPhone, label: 'Phone', value: '+91 62038 78051', href: 'tel:+916203878051' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Manish-choubey', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/manish-choubey-3555b4181/', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/manishchoubey7071/', label: 'LeetCode' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a role, product, or engineering problem in mind? Let's talk.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info-item">
                <item.icon />
                <div>
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
            <div className="contact-social">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="contact-success"
              >
                <p>Thanks for reaching out! I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
