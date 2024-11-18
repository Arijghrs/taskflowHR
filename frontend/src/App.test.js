import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/holiday/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders time', () => {
  render(<App />);
  const linkElement = screen.getByText(/time/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders profile', () => {
  render(<App />);
  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders timetable', () => {
  render(<App />);
  const linkElement = screen.getByText(/timetable/i);
  expect(linkElement).toBeInTheDocument();
});



