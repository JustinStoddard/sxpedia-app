import React from "react";
import { render, screen } from '@testing-library/react';

import SignUpPage from '../index';

test('Loads the SignUpPage with no errors', async () => {
  render(<SignUpPage />);
  const expectedElement = await screen.findByTestId("signup-page");
  expect(expectedElement).toBeInTheDocument();
});