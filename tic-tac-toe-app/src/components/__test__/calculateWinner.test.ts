import { calculateWinner } from '../calculateWinner'

describe('calculateWinner test', () => {
  //勝者が'O'の時'O' が返る
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

  test('勝者がいない時nullが返る', () => {
    const squares = [
      null, 'X', null,
      'O', null, 'O',
      null, 'X', 'X'
    ]
    expect(calculateWinner(squares)).toBe(null)
  });

})


