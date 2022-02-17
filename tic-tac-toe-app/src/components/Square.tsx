import { FC } from 'react';

export type squareType = string | null

type SquareProps = {
  value:  string | null
  onClick: ()=>void
}

export const Square: FC<SquareProps> = ({ value, onClick }) =>  {
  return (
    <button 
      className="square" 
      onClick={ () => onClick() }
    >
      { value }
    </button>
  );
}

