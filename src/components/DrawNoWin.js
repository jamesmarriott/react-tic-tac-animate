import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function DrawWin(props) {


const { height, width } = useWindowDimensions();

  const xpos0 = width/25
  const xpos4 = width-(width/25)
  const xpos2 = width/2
  const ypos1 = height/2
  const yposStart = height/25
  const ypos5 = height-(height/25)
  const strokeW = width/120
  const ypos4 = height-(height/50)

  return (
    <motion.div className="winline-holder">
        {props.children}
        <motion.svg
        height="100%"
        width="100%"
        initial="hidden"
        animate="visible"
        >
          <motion.line
            x1={xpos0}
            y1={yposStart}
            x2={xpos4}
            y2={ypos5}
            stroke-width={strokeW}
            stroke="#FFF"
            custom={1}
            variants={drawPath}
        />         
         <motion.line
            x1={xpos0}
            y1={ypos5}
            x2={xpos4}
            y2={yposStart}
            stroke-width={strokeW}
            stroke="#FFF"
            custom={1}
            variants={drawPath}
        />
                 <motion.line
            x1={xpos0}
            y1={ypos1}
            x2={xpos4}
            y2={ypos1}
            stroke-width={strokeW}
            stroke="#FFF"
            custom={1}
            variants={drawPath}
        />
           <motion.line
            x1={xpos2}
            y1={yposStart}
            x2={xpos2}
            y2={ypos4}
            stroke-width={strokeW}
            stroke="#FFF"
            custom={1}
            variants={drawPath}
        />
        </motion.svg>
  </motion.div>
  );
}

