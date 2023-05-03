import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import FavoritePokemon from '../pages/FavoritePokemon';
import App from '../App';

describe('Testes FavoritePokemon', () => {
  it('É exibida uma msg caso nenhum pokemon seja favoritado', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ [] } />);

    const noFavorite = screen.getByText(/no favorite pokémon found/i);

    expect(noFavorite).toBeInTheDocument();
  });

  it('São exibidos apenas os favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const detailed = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(detailed).toBeInTheDocument();
    userEvent.click(detailed);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');

    const favInput = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(favInput).toBeInTheDocument();
    userEvent.click(favInput);

    const acessFav = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(acessFav);

    const markedFav = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });

    expect(markedFav).toBeInTheDocument();
  });
});
