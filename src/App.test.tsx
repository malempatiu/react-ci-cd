import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App  />);

    const counter = screen.getByRole('button', {name: /count is 01/i});
    expect(counter).toBeInTheDocument();
  });
});

