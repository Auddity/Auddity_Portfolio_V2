import { motion } from 'framer-motion'

const tapMotion = {
  scale: 0.8,
  duration: 0.3
}

const hoverMotion = {
  color: "transparent"
}

export function AnimatedFooterLink({children}) {
  return (
    <motion.div
      whileTap={tapMotion}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedHeaderLink({children}) {
  return (
    <motion.div
      whileTap={tapMotion}
      whileHover={hoverMotion}
    >
      {children}
    </motion.div>
  )
}