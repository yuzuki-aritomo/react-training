import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Board from '../Board';

describe('Board', () => {
  test('クリックされた時にイベントが発行される', () => {
    const onClick = jest.fn()
    render(
      <Board
        squares={ Array(9).fill(null) }
        onClick={ onClick }
      />
    );
    const btn = screen.getAllByRole('button')[0]
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});