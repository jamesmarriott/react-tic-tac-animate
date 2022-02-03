import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Square from "./Square";
import DrawWin from './DrawWin'

const Game = () => {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);
  const nextSymbol = isXNext ? "X" : "O";
  const winner = calculateWinner(squares);


  function Restart({ onClick }) {

    return (
      <button className="restart" onClick={onClick}>
        Play again
      </button>
    );
  }

  function getStatus() {
    console.log(winner)
    if (winner) {
      return isXNext ? "Winner: O" : "Winner: X"
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return "Player: " + nextSymbol;
    }
  }

  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }

  console.log(winner)

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
          setIsXNext(!isXNext); // toggle turns
        }}
      />
    )
  }

return (
    <div className="container">
      <div className="game">
      {winner && <DrawWin winner={winner}/>}
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">{getStatus()}</div>
        <div className="restart-button">{renderRestartButton()}</div>
      </div>
    </div>
)
};

export default Game;
