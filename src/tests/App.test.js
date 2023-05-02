import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Testes App', () => {
  it('Teste link página Home e path', () => {
    const { history } = renderWithRouter(<App />);

    const firstLink = screen.getByRole('link', {
      name: /home/i,
    });

    expect(firstLink).toBeInTheDocument();
    userEvent.click(firstLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Teste link página About e path', () => {
    const { history } = renderWithRouter(<App />);

    const secondLink = screen.getByRole('link', {
      name: /about/i,
    });

    expect(secondLink).toBeInTheDocument();
    userEvent.click(secondLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Teste link página Favorite Pokémon e path', () => {
    const { history } = renderWithRouter(<App />);

    const thirdLink = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    expect(thirdLink).toBeInTheDocument();
    userEvent.click(thirdLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('Teste link página Favorite Pokémon e path', () => {
    const { history } = renderWithRouter(<App />);

    const thirdLink = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    expect(thirdLink).toBeInTheDocument();
    userEvent.click(thirdLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('Verifica o comportamento em caso de rota inexistente', () => {
    const { history } = renderWithRouter(<App />);

    const invalidURL = '/henrique';

    act(() => {
      history.push(invalidURL);
    });

    const doNotFounded = screen.getByRole('heading', {
      name: /page requested not found/i,
    });

    expect(doNotFounded).toBeInTheDocument();
  });
});
