import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';

import App from '../App';

describe('Testes App', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    render(<App />);

    const firstLink = screen.getByRole('link', {
      name: /home/i,
    });
    expect(firstLink(/Home/i)).toBeInTheDocument(); // https://stackoverflow.com/questions/58976251/checking-text-appears-inside-an-element-using-react-testing-library
  });
});
