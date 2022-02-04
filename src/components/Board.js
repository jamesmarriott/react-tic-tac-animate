import React from "react";
import { useState, useEffect } from 'react';
import useWindowDimensions from "../hooks/useWindowsDimensions";

const Board = () => {

const squares = Array(9).fill(null)
const { width, height } = useWindowDimensions()

const squareSize = {
  width: `${height/ 3}px`,
  height: `${height/ 3}px`,
}

const squaresBox = squares.map((item, index) => {
  console.log(item, index)
    return (    
    <div style={squareSize} className="grid-inner">
    <div>height: {(Math.floor(parseInt(squareSize.height)))}</div>
    <div>width: {(Math.floor(parseInt(squareSize.width)))}</div>
    <div>diagonal: {(Math.floor(parseInt(Math.sqrt(2) * height/3)))}</div>
    </div>
    )
})

return (
<>
  <div className="grid-container">
    <div className="window-description">
          <p>Window width: {width}</p><p>Window height: {width}</p>
    </div>
  {squaresBox}
  </div>
  </>
)}

export default Board;