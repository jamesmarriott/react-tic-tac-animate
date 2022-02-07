import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 3,
    },
    visible: { 
      opacity: 1,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 90, 360, 90],
       transition: {
       duration: 3,
       repeat: Infinity
       },
       
    }
  };

const Loader = ({loading}) => {
  
 let num = Math.random()

  return (
    <>
     <AnimatePresence>
     {loading && (
      <motion.div className="loader"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      >
      <h1>{num < 0.5 ? "X" : "O"}</h1>
      </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Loader;