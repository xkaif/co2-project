import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  const renderHeader = () => {
    render(
      <BrowserRouter>
        <Header title="Test Titel" subtitle="Test Untertitel" />
      </BrowserRouter>
    );
  };

  test('rendert Titel und Untertitel', () => {
    renderHeader();
    expect(screen.getByText('Test Titel')).toBeInTheDocument();
    expect(screen.getByText('Test Untertitel')).toBeInTheDocument();
  });

  test('Navigation Links funktionieren', () => {
    renderHeader();
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Über uns')).toHaveAttribute('href', '/ueberuns');
  });

  test('RTL/LTR Toggle funktioniert', () => {
    renderHeader();
    const toggleButton = screen.getByText('LTR');
    fireEvent.click(toggleButton);
    expect(screen.getByText('RTL')).toBeInTheDocument();
  });
}); 