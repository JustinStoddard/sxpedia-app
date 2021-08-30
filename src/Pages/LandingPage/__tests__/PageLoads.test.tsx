import React from "react";
import { render, screen } from '@testing-library/react';

import LandingPage from '../index';

test('Loads the LandingPage with no errors', async () => {
  render(<LandingPage />);
  const expectedElement = await screen.findByTestId("landing-page");
  expect(expectedElement).toBeInTheDocument();
});