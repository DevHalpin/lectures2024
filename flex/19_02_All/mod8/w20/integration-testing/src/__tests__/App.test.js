import React from 'react';
import ReactDOM from 'react-dom'; 
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});


test('change cheat state when clicking on robot', () => {
  const { getByTestId, debug, container } = render(<App />);
  const robotIcon = getByTestId('robot');

  fireEvent.click(robotIcon);
  expect(robotIcon).toHaveClass('cheating');
  // console.log(prettyDOM(robotIcon))
  // debug();

  fireEvent.click(robotIcon);
  expect(robotIcon).not.toHaveClass('cheating');
})


const mock = jest.fn();
let result = mock('foo');

expect(result).toBeUndefined();
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledTimes(1);
expect(mock).toHaveBeenCalledWith('foo');

const mockTwo = jest.fn(() => 'bar');
result = mockTwo('foo');

expect(result).toBe('bar');