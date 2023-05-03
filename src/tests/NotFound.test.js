import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import NotFound from '../pages/NotFound';

describe('Testes FavoritePokemon', () => {
  it('É exibida uma msg caso nenhum pokemon seja favoritado', () => {
    renderWithRouter(<NotFound />);

    const titleNotFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    expect(titleNotFound).toBeInTheDocument();

    const notFoundImg = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });

    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
