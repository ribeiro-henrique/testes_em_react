import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import FavoritePokemon from '../pages/FavoritePokemon';
import PokemonDetails from '../pages/PokemonDetails';

describe('Testes FavoritePokemon', () => {
  it('É exibida uma msg caso nenhum pokemon seja favoritado', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ [] } />);

    const noFavorite = screen.getByText(/no favorite pokémon found/i);

    expect(noFavorite).toBeInTheDocument();
  });

  it('São exibidos apenas os favoritados', () => {
    const { history } = renderWithRouter(<PokemonDetails />);

    const inputFav = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    expect(inputFav).toBeInTheDocument();
    userEvent.click(inputFav);

    const acessFav = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    expect(acessFav).toBeInTheDocument();
    userEvent.click(acessFav);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const markedFav = screen.getByRole('img', {
      name: /is marked as favorite/i,
    });

    expect(markedFav).toBeInTheDocument();
  });
});
