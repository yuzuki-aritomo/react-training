import { FC } from 'react';
import { useState } from 'react';
import Board from './Board'
import { calculateWinner } from './calculateWinner'

const Game: FC = () => {
  const [history, setHistory] = useState<{squares: Array<string | null>}[]>(
    [{ squares: Array(9).fill(null) }]
    );
    const [stepNumber, setStepNumber] = useState<number>(0)
    const [xIsNext, setXIsNext] = useState<boolean>(true)
  
  const handleClick = (i: number) => {
    const History = history.slice(0, stepNumber + 1);
    const current = History[History.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(History.concat([{ squares: squares }]))
    setStepNumber(History.length)
    setXIsNext(!xIsNext)
  }
  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext((step % 2) === 0,)
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + ( xIsNext ? 'X' : 'O');
  }
  return (
    <div className="game">
      <div className="game-board">
      <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}


export default Game