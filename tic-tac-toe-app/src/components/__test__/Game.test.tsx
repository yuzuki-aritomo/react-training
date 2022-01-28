import React from 'react';
import { render } from '@testing-library/react';

import Game from '../Game';

describe('Game', () => {
  test('renders App component', () => {
    render(
      <Game />
      );
  });
});