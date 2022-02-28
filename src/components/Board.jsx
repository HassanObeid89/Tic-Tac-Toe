import {useState} from "react";
import Square from "./Square";

export default function Board() {
  const [isXturn, setIsXturn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(''));
  console.log(board)
  function handleClick(index){
    let copyBoard = board
    if (copyBoard[index]){
      return
    }
    copyBoard[index] = isXturn ? "X":"O"
    setIsXturn(!isXturn)
    setBoard(copyBoard)
  }
  return (
    <div className="board-container">
      <div className="board-row">
        <Square value={board[0]} handleClick={()=>handleClick(0)} />
        <Square value={board[1]} handleClick={()=>handleClick(1)}/>
        <Square value={board[2]} handleClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={board[3]} handleClick={()=>handleClick(3)}/>
        <Square value={board[4]} handleClick={()=>handleClick(4)}/>
        <Square value={board[5]} handleClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={board[6]} handleClick={()=>handleClick(6)}/>
        <Square value={board[7]} handleClick={()=>handleClick(7)}/>
        <Square value={board[8]} handleClick={()=>handleClick(8)}/>
      </div>
    </div>
  );
}
