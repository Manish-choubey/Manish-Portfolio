import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiCode, HiAcademicCap, HiHeart } from 'react-icons/hi'

const stats = [
  { icon: HiBriefcase, value: 4, suffix: '+', label: 'Years Experience' },
  { icon: HiCode, value: 25, suffix: '+', label: 'Projects Completed' },
  { icon: HiAcademicCap, value: 10, suffix: '+', label: 'Technologies' },
  { icon: HiHeart, value: 100, suffix: '%', label: 'Passion for Code' },
]

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card"
            >
              <stat.icon className="stat-icon" />
              <div className="stat-value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
