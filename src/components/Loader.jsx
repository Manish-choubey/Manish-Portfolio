import { motion } from 'framer-motion'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="loader-logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="logo-bracket">&lt;</span>
        <span className="logo-text">Dev</span>
        <span className="logo-bracket">/&gt;</span>
      </motion.div>
      <motion.div
        className="loader-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
