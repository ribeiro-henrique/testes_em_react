import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';

import About from '../pages/About';

describe('Testes About', () => {
  it('Teste se há um h2 com o texto About Pokedex', () => {
    renderWithRouter(<About />);

    const titleAbout = screen.getByRole('heading', {
      name: /about pokédex/i,
    });

    expect(titleAbout).toBeInTheDocument();
  });

  it('Teste se há dois parágrafos na page', () => {
    renderWithRouter(<About />);

    const firstPara = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );

    expect(firstPara).toBeInTheDocument();

    const secondPara = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );

    expect(secondPara).toBeInTheDocument();
  });

  it('Teste se há uma img com a strg exata', () => {
    renderWithRouter(<About />);

    const exaclySrc = screen.getByRole('img', {
      name: /pokédex/i,
    });

    expect(exaclySrc).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
