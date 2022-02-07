import Game from './components/Game';
import React, {useState, useEffect} from 'react'
import Loader from './components/Loader';
import { AnimatePresence } from "framer-motion";
import RestartButton from './components/RestartButton';

function App() {

  const [loading, setLoader] = useState(true)
  const [gameInPlay, setGameInPlay] = useState(false)
  
  const gameStatusUpdate = () => {
      setTimeout(()=>{
      setGameInPlay(false)
    },2000)
  }
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoader(false)
    },2000)
    return () => clearTimeout(timer);
  },[loading])

  
  return (

  <>   
     {loading && <Loader loading={loading}/>}
     <AnimatePresence exitBeforeEnter onExitComplete={() => setLoader(false)}>

    {!loading && !gameInPlay && <RestartButton onClick={()=>setGameInPlay(true)}/>}

     {!loading && gameInPlay && <Game gameStatusUpdate={gameStatusUpdate}/>}
     
     </AnimatePresence>

  </>
  )
  }
  

export default App;