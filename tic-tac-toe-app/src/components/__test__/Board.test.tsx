import React from 'react';
import { render } from '@testing-library/react';

import Board from '../Board';

describe('Game', () => {
  test('renders App component', () => {
    render(
      <Board
        squares={ Array(9).fill(null) }
        onClick={ () => {} }
      />
      );
  });
});