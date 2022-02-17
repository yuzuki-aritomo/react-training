import { FC } from 'react'
import { calculateWinner } from './calculateWinner'
import { squareType } from './Square';

type GameFooterType = {
  xIsNext: boolean
  current: { squares:  squareType[]}
  history: {squares: Array<squareType>}[]
  jumpTo: (step: number) => void
}

const GameFooter: FC<GameFooterType> = ({xIsNext, current, history, jumpTo }) => {
  
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

  return(
    <div className="game-info">
      <div>{ status }</div>
      <ol>{ moves }</ol>
    </div>
  )
}

export default GameFooter