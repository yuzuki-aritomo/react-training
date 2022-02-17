import { squareType, Square } from './Square'
import { FC } from 'react';

type renderSquareType = {
  num: number
  squares:  Array<squareType>
  onClick: (i: number) => void
}

const RenderSquare: FC<renderSquareType>  = ({ squares, onClick, num}) => {
  return (
    <Square
      value={squares[num]}
      onClick={() => onClick(num)} 
      />
  )
}

export default RenderSquare