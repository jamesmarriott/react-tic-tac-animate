export function calculateWinner(squares) {
  const possibleLines = [
    // top horizontal case 0 
    [0, 1, 2],

    // middle horizontal case 1 
    [3, 4, 5],

    // bottom horizontal case 2 
    [6, 7, 8],

    // left vertical case 3 
    [0, 3, 6],

    // middle vertical case 4 
    [1, 4, 7],

    // right vertical case 5 
    [2, 5, 8],

    // left diagonal case 6 
    [0, 4, 8],
    
    // right diagonal case7 
    [2, 4, 6]
  ];


  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return (squares[a],[i]);
    }
  }
  return null;
}

export function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}