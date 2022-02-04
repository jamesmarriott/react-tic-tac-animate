import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";


export default function Draw({height}) {

  const viewBoxDim = `0 0 ${height/3} ${height/3}`

  return (
    <motion.svg
      height="100%"
      width="100%"
      viewBox={viewBoxDim}
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx={height/6}
        cy={height/6}
        r={height/6-(height/25)}
        stroke-width={height/100}
        stroke="#0099ff"
        variants={drawPath}
        custom={1}
      />
    </motion.svg>
  );
}
