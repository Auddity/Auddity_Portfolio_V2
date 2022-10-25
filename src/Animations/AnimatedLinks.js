import { motion } from 'framer-motion'

const tapMotion = {
  scale: 0.8,
  duration: 0.3
}

function AnimatedLink({children}) {
  return (
    <motion.a
      whileTap={tapMotion}
    >
      {children}
    </motion.a>
  )
}

export default AnimatedLink