import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('rendert die home page', () => {
    render(<App />);
    expect(screen.getByText('Earthguardians')).toBeInTheDocument();
  });
});