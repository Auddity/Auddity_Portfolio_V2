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

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={transitions}
      initial='initial'
      animate='animate'
      exit='exit'
      transition = {{
        opacity: { ease: "easeIn", duration: .29 },
        scale: { ease: "easeIn", duration: .21},
        type: "tween", stiffness: 0
      }}
    >
      { children }
    </motion.div>
  )
}

export default AnimatedPage