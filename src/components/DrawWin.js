import { motion } from "framer-motion";
import { drawPath } from "./DrawMotion";
import useWindowDimensions from "../hooks/useWindowsDimensions";

export default function DrawWin({winner}) {

let winDraw

  // x1={height/25-(height/150)}
  // y1={height/25-(height/150)}
  // x2={height/25-(height/150)}
  // y2={height/1.8}


  const { height, width } = useWindowDimensions();

console.log(winner[0])

  const xpos0 = width/25
  // const xpos1 = width/3
  const xpos2 = width/2
  const xpos3 = width/6

  const xpos4 = width-(width/25)
  const xpos5 = width*0.832
  
  const yposStart = height/25
  const ypos0 = height/6
  const ypos1 = height/2
  const ypos3 = height*0.832
  const ypos4 = height-(height/50)
  const ypos5 = height-(height/25)
  const strokeW = width/120

 switch(winner[0]) {
    case 0:
      winDraw = {
        x1: xpos0,
        y1: ypos0,
        x2: xpos4,
        y2: ypos0
        }
    break;
    case 1:
      winDraw = {
        x1: xpos0,
        y1: ypos1,
        x2: xpos4,
        y2: ypos1
        }
    break;
    case 2: 
    winDraw = {
      x1: xpos0,
      y1: ypos3,
      x2: xpos4,
      y2: ypos3
      }
    break;
    case 3: 
    winDraw = {
      x1: xpos3,
      y1: yposStart,
      x2: xpos3,
      y2: ypos4,
    }
    break;
    case 4: 
    winDraw = {
      x1: xpos2,
      y1: yposStart,
      x2: xpos2,
      y2: ypos4,
    }
    break;
    case 5: 
    winDraw = {
      x1: xpos5,
      y1: yposStart,
      x2: xpos5,
      y2: ypos4,
    }
    break;
    case 6: 
    winDraw = {
      x1: xpos0,
      y1: yposStart,
      x2: xpos4,
      y2: ypos5,
      }
    break;
    case 7: 
    winDraw = {
      x1: xpos0,
      y1: ypos5,
      x2: xpos4,
      y2: yposStart,
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
        <motion.svg
        height="100%"
        width="100%"
        initial="hidden"
        animate="visible"
        >
        <motion.line
            x1={winDraw.x1}
            y1={winDraw.y1}
            x2={winDraw.x2}
            y2={winDraw.y2}
            stroke-width={strokeW}
            stroke="#fff"
            custom={1}
            variants={drawPath}
        />
        </motion.svg>
  </motion.div>
  );
}

