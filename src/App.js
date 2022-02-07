import Game from './components/Game';
import React, {useState, useEffect} from 'react'
import Loader from './components/Loader';
import { AnimatePresence } from "framer-motion";
import RestartButton from './components/RestartButton';

function App() {

  const [loading, setLoader] = useState(true)
  const [startScreen, setStartScreen] = useState(true)
  const [gameInPlay, setGameInPlay] = useState(false)
  
  const gameStatusUpdate = () => {
      setTimeout(()=>{
      setGameInPlay(false)
    },2000)
  }
  
  useEffect(()=>{
    setStartScreen(true)
  },[gameInPlay])

  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoader(false)
      setStartScreen(true)
    },2000)
    return () => clearTimeout(timer);
  },[loading])

  
  return (

  <>   
    <AnimatePresence exitBeforeEnter onExitComplete={() => setLoader(false)}>
     <Loader loading={loading}/>
     </AnimatePresence>
     <AnimatePresence exitBeforeEnter onExitComplete={() => setStartScreen(false)}>
    <RestartButton gameInPlay={gameInPlay} startScreen={startScreen} onClick={()=>setGameInPlay(true)}/>
    </AnimatePresence>
     <AnimatePresence exitBeforeEnter onExitComplete={() => setGameInPlay(false)}>
     {gameInPlay && <Game gameStatusUpdate={gameStatusUpdate} gameInPlay={gameInPlay}/>}
     </AnimatePresence>

  </>
  )
  }
  

export default App;