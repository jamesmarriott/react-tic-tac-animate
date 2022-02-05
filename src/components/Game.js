import React, { useState, } from "react";
import { calculateWinner, isBoardFull } from "../helper";
import Square from "./Square";
import DrawWin from './DrawWin'
import DrawNoWin from './DrawNoWin'
// import Board from './Board'
import DrawGrid from "./DrawGrid";

const Game = ({gameStatusUpdate}) => {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  const isDraw = isBoardFull(squares)
  const nextSymbol = isXNext ? "X" : "O";
  const winner = calculateWinner(squares);

  console.log(gameStatusUpdate)

  function getStatus() {
    
    if (winner) {
      gameStatusUpdate()
      return isXNext ? "Winner: O" : "Winner: X"
    } else if (isBoardFull(squares)) {
      gameStatusUpdate()
    } else {
      return "Player: " + nextSymbol;
    }
  }


  function renderSquare(i) {

    return (

      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);
          setIsXNext(!isXNext); 
        }}
      />
    )
  }

return (

  // <Board/>

    <div className="grid-container">

      <DrawGrid/>
      {winner &&
        <>
        <DrawWin winner={winner}>
        </DrawWin>
        </>

        }

      {isDraw && 
        <>
          <DrawNoWin>
          </DrawNoWin>
        </>
      }

            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        <div className="game-info">{getStatus()}</div>

      </div>

)
};

export default Game;
