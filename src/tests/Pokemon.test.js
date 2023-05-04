import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Testes Pokemon', () => {
  it('Verifica card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const clickOnNormal = screen.getByRole('button', {
      name: /normal/i,
    });

    userEvent.click(clickOnNormal);

    screen.getByText(/snorlax/i);

    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(moreDetails);

    screen.getByText(/normal/i);

    const snrlxImg = screen.getByRole('img', {
      name: /snorlax sprite/i,
    });

    expect(snrlxImg).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/4/40/Spr_5b_143.png');

    screen.getByText(/average weight: 460\.0 kg/i);
  });

  it('Verifica o link de navegação', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', {
      name: /more details/i,
    });

    expect(detailsLink).toHaveAttribute('href', '/pokemon/25');

    userEvent.click(detailsLink);

    screen.getByRole('heading', {
      name: /pikachu details/i,
    });

    screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });
  });

  it('Verifica se a URL muda', () => {
    const { history } = renderWithRouter(<App />);

    const pikaDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(pikaDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  it('Verifica atributos do pokemon favoritado', () => {
    renderWithRouter(<App />);

    const dragonBtn = screen.getByRole('button', {
      name: /dragon/i,
    });

    userEvent.click(dragonBtn);

    const dgrDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(dgrDetails);

    const isFav = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });

    userEvent.click(isFav);

    const favStar = screen.getByRole('img', {
      name: /dragonair is marked as favorite/i,
    });

    expect(favStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
