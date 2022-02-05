import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowsDimensions";


export default function RestartButton({onClick}) {
 
    const { height, width } = useWindowDimensions();

    const buttonSize = {
      width: `${width/ 12}px`,
      height: `${height/12}px`,
      color: 'white'
    }

    // const containerVariants = {
    //   hidden: { 
    //     opacity: 0, 
    //   },
    //   visible: { 
    //     opacity: 1, 
    //     transition: { delay: 1.5, duration: 1.5 }
    //   },
    //   exit: {
    //     x: "-100vh",
    //     transition: { ease: 'easeInOut' }
    //   }
    // };
  
    const buttonVariants = {
      hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
  
        transition: {
          duration: 0.3,
        }
      }
    }
    

  return (
    <motion.div 
    className="loader"
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <motion.button
        className="restart-button"
        style={buttonSize} 
        onClick={onClick}
        variants={buttonVariants}
        whileHover="hover"
        >
        X v O
        </motion.button>
    </motion.div>
  );
}

