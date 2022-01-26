import React, { useState } from 'react';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

type SquareProps = {
  value:  string | null
  onClick: ()=>void
}
const Square: FC<SquareProps> = ({ value, onClick }) =>  {
  return (
    <button 
      className="square" 
      onClick={ () => onClick() }
    >
      { value }
    </button>
  );
}

type BoardProps = {
  squares:  Array<string | null>
  onClick: (i: number) => void
}
const Board: FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i : number) => {
    return <Square 
    value={squares[i]}
    onClick={() => onClick(i)}
    />;
  }
  return (
    <div>
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
  );
}

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
  const History = history;
  const current = History[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = History.map((step, move) => {
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
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol>{ moves }</ol>
      </div>
    </div>
  );
}

const calculateWinner = (squares: Array<string | null>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
