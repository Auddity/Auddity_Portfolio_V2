import { motion } from 'framer-motion'

const transitions = {
  initial: {
    opacity: .3, scale: .2
  },
  animate: {
    opacity: 1, scale: 1
  },
  exit: {
    opacity: .4, scale: .1
  }
}

function AnimatedPage({children}) {
  return (
    <motion.div
      variants={transitions}
      initial='initial'
      animate='animate'
      exit='exit'
      transition = {{
        opacity: { ease: "linear" },
        duration: 0.3
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage