import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders title correctly', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Star Wars Galaxy Maps/i);
  expect(titleElement).toBeInTheDocument();
});
