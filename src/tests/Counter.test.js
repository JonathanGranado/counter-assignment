// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  
  fireEvent.click(incrementButton);
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  
  fireEvent.click(decrementButton);
  expect(count.textContent).toBe('-1');
});
