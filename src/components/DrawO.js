import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";

export default function Draw({height}) {


  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx={height/10-(height/150)}
        cy={height/10-(height/150)}
        r={height/14}
        stroke-width={height/80}
        stroke="#0099ff"
        variants={drawPath}
        custom={1}
      />
    </motion.svg>
  );
}
