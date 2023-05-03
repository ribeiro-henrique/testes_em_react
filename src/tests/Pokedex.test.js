import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Testes Pokedex', () => {
  it('Verifica h2 com texto', () => {
    renderWithRouter(<App />);

    const encounteredTitle = screen.getByRole('heading', {
      name: /encountered pokémon/i,
    });

    expect(encounteredTitle).toBeInTheDocument();
  });

  it('Verifica se exibe próximo pokemon ao clicar no btn', () => {
    renderWithRouter(<App />);

    const nextPoke = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });

    expect(nextPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const secondPoke = screen.getByText(/charmander/i);
    expect(secondPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const thirdPoke = screen.getByText(/caterpie/i);
    expect(thirdPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const fourthPoke = screen.getByText(/ekans/i);
    expect(fourthPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const fifthPoke = screen.getByText(/alakazam/i);
    expect(fifthPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const sixtyPoke = screen.getByText(/mew/i);
    expect(sixtyPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const seventPoke = screen.getByText(/rapidash/i);
    expect(seventPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const eigthPoke = screen.getByText(/snorlax/i);
    expect(eigthPoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const ninePoke = screen.getByText(/dragonair/i);
    expect(ninePoke).toBeInTheDocument();

    userEvent.click(nextPoke);

    const firstPoke = screen.getByText(/pikachu/i);
    expect(firstPoke).toBeInTheDocument();
  });
});
