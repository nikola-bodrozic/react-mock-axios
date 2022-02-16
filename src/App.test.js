/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loader and data from API', async () => {
  render(<App />);
  const loader = screen.queryByTestId('loading');
  expect(loader).toBeInTheDocument();
  screen.debug()
  const requestDone = await screen.findByTestId('resolved')
  screen.debug()
  expect(requestDone).toBeInTheDocument();
  const countUsers = screen.getAllByTitle('user')
  expect(countUsers.length).toBe(2)
});
