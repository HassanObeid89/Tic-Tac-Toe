import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [isXturn, setIsXturn] = useState(true);
  const [board, setBoard] = useState([]);
  let winner = calculateWinner();
  let nextPlayer = isXturn ? "X" : "O";
  function calculateWinner() {
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      let [a, b, c] = winningCombinations[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function onReset() {
    setBoard(Array(9).fill(""));
    setIsXturn(true);
  }

  function handleClick(index) {
    let copyBoard = board;
    if (copyBoard[index] || calculateWinner()) {
      return;
    }
    copyBoard[index] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setBoard(copyBoard);
  }
  return (
    <div className="board-container">
      <section className="header">
        <p>
          Winner:
          {winner
            ? winner === true && nextPlayer === "X"
              ? "O"
              : "X"
            : "None"}
        </p>
        <button className="reset" onClick={onReset}>Reset</button>
      </section>

      <div className="board-row">
        <Square value={board[0]} handleClick={() => handleClick(0)} />
        <Square value={board[1]} handleClick={() => handleClick(1)} />
        <Square value={board[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={board[3]} handleClick={() => handleClick(3)} />
        <Square value={board[4]} handleClick={() => handleClick(4)} />
        <Square value={board[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={board[6]} handleClick={() => handleClick(6)} />
        <Square value={board[7]} handleClick={() => handleClick(7)} />
        <Square value={board[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
