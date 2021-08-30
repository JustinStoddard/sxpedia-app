import React from "react";
import { render, screen } from '@testing-library/react';

import HomePage from '../index';

test('Loads the HomePage with no errors', async () => {
  render(<HomePage />);
  const expectedElement = await screen.findByTestId("home-page");
  expect(expectedElement).toBeInTheDocument();
});