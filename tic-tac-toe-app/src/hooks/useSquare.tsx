import { useState } from 'react';
import { calculateWinner } from './../components/calculateWinner'
import { squareType } from './../components/Square';

const useSquare = (): [ boolean, { squares:  squareType[]}, {squares: Array<squareType>}[], (i: number)=> void, (step: number)=>void ] => {
  const [history, setHistory] = useState<{squares: Array<squareType>}[]>(
    [{ squares: Array(9).fill(null) }]
  );
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const current = history[stepNumber];

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
  return [xIsNext, current, history, handleClick, jumpTo ]
}

export default useSquare