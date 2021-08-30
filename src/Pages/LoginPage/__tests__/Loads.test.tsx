import React from "react";
import { render, screen } from '@testing-library/react';

import LoginPage from '../index';

test('Loads the LoginPage with no errors', async () => {
  render(<LoginPage />);
  const expectedElement = await screen.findByTestId("login-page");
  expect(expectedElement).toBeInTheDocument();
});