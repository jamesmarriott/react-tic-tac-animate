import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function DrawGrid() {

    const { height, width } = useWindowDimensions();

    const xpos0 = width/50
    const xpos1 = width/3
    const xpos3 = width/1.5
    const xpos4 = width-(width/50)
    const ypos0 = height/50
    const ypos1 = height/3
    const ypos3 = height/1.5
    const ypos4 = height-(height/50)
    const strokeW = width/120
    
    // const squareSide = height

    // const viewBoxDim = `0 0 ${height} ${height}`
    
      return (
          <motion.div className="board-draw">
                <motion.svg
                    height="100%"
                    width="100%"
                    // viewBox={viewBoxDim}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.line
                    x1={xpos1}
                    y1={xpos0}
                    x2={xpos1}
                    y2={ypos4}
                    stroke-width={strokeW}
                    stroke="#fff"
                    custom={1}
                    variants={drawPath}
                    />
                    <motion.line
                    x1={xpos3}
                    y1={xpos0}
                    x2={xpos3}
                    y2={ypos4}
                    stroke-width={strokeW}
                    stroke="#fff"
                    custom={2.5}
                    variants={drawPath}
                    />
                    <motion.line
                    x1={ypos0}
                    y1={ypos3}
                    x2={xpos4}
                    y2={ypos3}
                    stroke-width={strokeW}
                    stroke="#fff"
                    custom={4}
                    variants={drawPath}
                    />
                    <motion.line
                    x1={ypos0}
                    y1={ypos1}
                    x2={xpos4}
                    y2={ypos1}
                    stroke-width={strokeW}
                    stroke="#fff"
                    custom={6}
                    variants={drawPath}
                    />
                </motion.svg>
        </motion.div>
      );
    }