import { calculateWinner } from '../calculateWinner'

describe('calculateWinner test', () => {

  describe('勝者がいる時', () => {
    test('勝者が"O"の時"O" が返る', () => {
      const squares = [
        null, 'X', null,
        'O', 'O', 'O',
        null, 'X', 'X'
      ]
      expect(calculateWinner(squares)).toBe('O')
    });
    test('勝者が"X"の時"X" が返る', () => {
      const squares = [
        null, 'X', null,
        'O', 'X', 'O',
        null, 'X', 'X'
      ]
      expect(calculateWinner(squares)).toBe('X')
    });
  })

  describe('勝者がいない時', ()=> {
    test('nullが返る', () => {
      const squares = [
        null, 'X', null,
        'O', null, 'O',
        null, 'X', 'X'
      ]
      expect(calculateWinner(squares)).toBe(null)
    });
  })
})


