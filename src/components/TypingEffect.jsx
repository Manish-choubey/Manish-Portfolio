import { useState, useEffect } from 'react'

const phrases = [
  'Full-Stack Developer',
  'MERN Stack Developer',
  'React Enthusiast',
  'Node.js Developer',
  'Problem Solver',
]

export default function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    const speed = isDeleting ? 50 : 80

    if (!isDeleting && display === phrase) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && display === '') {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    } else {
      const timeout = setTimeout(
        () => setDisplay(isDeleting ? phrase.slice(0, display.length - 1) : phrase.slice(0, display.length + 1)),
        speed
      )
      return () => clearTimeout(timeout)
    }
  }, [display, isDeleting, phraseIndex])

  return (
    <span className="hero-tagline">
      {display}
      <span className="typing-cursor">|</span>
    </span>
  )
}
