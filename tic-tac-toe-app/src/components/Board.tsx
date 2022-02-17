import { squareType } from './Square'
import RenderSquare from './renderSquare'
import { FC } from 'react';

type BoardProps = {
  squares:  Array<squareType>
  onClick: (i: number) => void
}

const Board: FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div>
      <div className="board-row">
        {
          [0, 1, 2].map((value) => {
            return <RenderSquare
              onClick = { onClick }
              squares = { squares }
              num = { value }
            />
          })
        }
      </div>
      <div className="board-row">
      {
        [3, 4, 5].map((value) => {
          return <RenderSquare
            onClick = { onClick }
            squares = { squares }
            num = { value }
          />
        })
      }
      </div>
      <div className="board-row">
      {
        [6, 7, 8].map((value) => {
            return <RenderSquare
              onClick = { onClick }
              squares = { squares }
              num = { value }
            />
        })
      }
      </div>
    </div>
  );
}

export default Board