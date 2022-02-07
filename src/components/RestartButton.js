import { motion, AnimatePresence } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowsDimensions";


export default function RestartButton({onClick, gameInPlay, startScreen}) {
 
    const { height, width } = useWindowDimensions();

    const buttonSize = {
      width: `${width/ 3}px`,
      height: `${height/12}px`,
      color: 'white'
    }

  
    const buttonVariants = {
      hidden: { scale: 0},
      visible: { 
        scale: 1,
        transition: { delay: 0.5 }
      },
      hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
          duration: 0.3,
        }
      }
    }
    

  return (
    <AnimatePresence>
      {startScreen && !gameInPlay &&
      <motion.div
      className="loader"
      >
          <motion.button
          className="restart-button"
          style={buttonSize} 
          onClick={onClick}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hover"
          >
          X v O
          </motion.button>
      </motion.div>
      }
    </AnimatePresence>
  );
}

