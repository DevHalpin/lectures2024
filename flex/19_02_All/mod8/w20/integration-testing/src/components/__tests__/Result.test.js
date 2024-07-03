import React from 'react';
import { render, getByTestId, prettyDOM, fireEvent } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display results from an API', () => {
  const { findByText, getByTestId} = render(<Result status="Waiting" />);

  const highScoreButton = getByTestId('high-scores');

  fireEvent.click(highScoreButton);

  return findByText('Carol', {exact: false});
})
