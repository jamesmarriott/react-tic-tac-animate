import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";

export default function DrawX({height}) {

 
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1={height/25-(height/150)}
        y1={height/25-(height/150)}
        x2={height/6}
        y2={height/6}
        stroke-width={height/80}
        stroke="#ff0055"
        custom={1}
        variants={drawPath}
      />
      <motion.line
        x1={height/25-(height/150)}
        y1={height/6}
        x2={height/6}
        y2={height/25-(height/150)}
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