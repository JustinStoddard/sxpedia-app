import React from "react";
import { render, screen } from '@testing-library/react';

import Loader from '../index';

test('Loads the Loader with no errors', async () => {
  render(<Loader />);
  const expectedElement = await screen.findByTestId("loader");
  expect(expectedElement).toBeInTheDocument();
});