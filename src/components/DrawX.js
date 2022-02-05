import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";

export default function DrawX({height}) {

const squareSide = height/3
// const diagLength = Math.sqrt(2) * squareSide

 
const viewBoxDim = `0 0 ${height/3} ${height/3}`

  return (
    <motion.svg
      height="100%"
      width="100%"
      viewBox={viewBoxDim}
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1={height/25}
        y1={height/25}
        x2={squareSide-(height/25)}
        y2={squareSide-(height/25)}
        stroke-width={height/80}
        stroke="#ff0055"
        custom={1}
        variants={drawPath}
      />
      <motion.line
        x1={squareSide-(height/25)}
        y1={height/25}
        x2={height/25}
        y2={squareSide-(height/25)}
        stroke-width={height/80}
        stroke="#ff0055"
        custom={3.5}
        variants={drawPath}
      />
    </motion.svg>
  );
}


// <motion.line
// x1="20"
// y1="20"
// x2="160"
// y2="160"
// stroke="#ff0055"
// custom={1}
// variants={drawPath}
// />
// <motion.line
// x1="20"
// y1="160"
// x2="150"
// y2="20"
// stroke="#ff0055"
// custom={3.5}
// variants={drawPath}
// />