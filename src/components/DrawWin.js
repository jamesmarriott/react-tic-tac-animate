import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function DrawWin({winner}) {

  // x1={height/25-(height/150)}
  // y1={height/25-(height/150)}
  // x2={height/25-(height/150)}
  // y2={height/1.8}
  


  const { height } = useWindowDimensions();

  let winDraw

 switch(winner[0]) {
    case 0:
    winDraw = {
    x1: height/30-(height/150),
    y1: height/9.5-(height/150),
    x2: height/1.75-(height/150),
    y2: height/9.5-(height/150),
    }
    break;
    case 1:
      winDraw = {
        x1: height/30-(height/150),
        y1: height/3.3-(height/150),
        x2: height/1.75-(height/150),
        y2: height/3.3-(height/150),
        }
    break;
    case 2: 
      winDraw = {
        x1: height/23-(height/150),
        y1: height/2,
        x2: height/1.72-(height/150),
        y2: height/2
        }
    break;
    case 3: 
    winDraw = {
      x1: height/9-(height/150),
      y1: height/25-(height/150),
      x2: height/9-(height/150),
      y2: height/1.8,
    }
    break;
    case 4: 
    winDraw = {
      x1: height/3.2-(height/150),
      y1: height/25-(height/150),
      x2: height/3.2-(height/150),
      y2: height/1.77,
    }
    break;
    case 5: 
    winDraw = {
      x1: height/1.95-(height/150),
      y1: height/25-(height/150),
      x2: height/1.95-(height/150),
      y2: height/1.8,
    }
    break;
    case 6: 
    winDraw = {
      x1: height/25-(height/150),
      y1: height/25-(height/150),
      x2: height/1.75-(height/150),
      y2: height/1.8,
      }
    break;
    case 7: 
    winDraw = {
      x1: height/1.75-(height/150),
      x2: height/25-(height/150),
      y1: height/25-(height/150),
      y2: height/1.8,
      }
    break;
    default:
      winDraw = {
      x1: height/25-(height/150),
      y1: height/25-(height/150),
      x2: height/25-(height/150),
      y2: height/1.8,
      }
  }

  return (
    <motion.div className="winline-holder">
      <motion.div className="winline-inner">
        <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        >
        <motion.line
            x1={winDraw.x1}
            y1={winDraw.y1}
            x2={winDraw.x2}
            y2={winDraw.y2}
            stroke-width={height/80}
            stroke="#ff0055"
            custom={1}
            variants={drawPath}
        />
        </motion.svg>
  </motion.div>
  </motion.div>
  );
}

