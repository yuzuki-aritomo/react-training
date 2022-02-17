import { FC, ReactNode } from 'react'

type GameFooterType = {
  status: String
  moves: ReactNode
}

const GameFooter: FC<GameFooterType> = ({status, moves}) => {
  return(
    <div className="game-info">
      <div>{ status }</div>
      <ol>{ moves }</ol>
    </div>
  )
}

export default GameFooter