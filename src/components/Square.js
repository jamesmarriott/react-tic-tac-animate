import DrawX from "./DrawX";
import DrawO from "./DrawO";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function Square({ value, onClick }) {

  
  const { height, width } = useWindowDimensions();

  const buttonSize = {
    width: `${width/ 3}px`,
    height: `${height/ 3}px`,
    backgroundColor: 'transparent'
  }

  const buttonVariants = {
    hover: {
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }
  return (
    <motion.div>
    <motion.button 
    style={buttonSize} 
    className="square"
    onClick={onClick}
    variants={buttonVariants}
    whileHover="hover"
    >
      {value === "" ? value :
        value === "X" ? <DrawX height={height}/> :
        value === "O" ? <DrawO height={height}/>
        : null}
    </motion.button>
    </motion.div>
  );
}