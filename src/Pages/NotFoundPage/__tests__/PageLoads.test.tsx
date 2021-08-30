import React from "react";
import { render, screen } from '@testing-library/react';

import NotFoundPage from '../index';

test('Loads the NotFoundPage with no errors', async () => {
  render(<NotFoundPage />);
  const expectedElement = await screen.findByTestId("not-found-page");
  expect(expectedElement).toBeInTheDocument();
});