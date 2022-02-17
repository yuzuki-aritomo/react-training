import { FC } from 'react';
import Board from './Board'
import GameFooter from './GameFooter'
import useSquare from './../hooks/useSquare'

const Game: FC = () => {
  const [ xIsNext, current, history, handleClick, jumpTo ] = useSquare()

  return (
    <div className="game">
      <div className="game-board">
      <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <GameFooter
        current = { current }
        xIsNext = { xIsNext }
        history = { history }
        jumpTo = { jumpTo }
      />
    </div>
  );
}


export default Game