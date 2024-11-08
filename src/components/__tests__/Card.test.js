import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  test('rendert Titel und Inhalt', () => {
    render(
      <Card 
        title="Test Titel" 
        content="Test Inhalt"
        icon="star"
      />
    );
    
    expect(screen.getByText('Test Titel')).toBeInTheDocument();
    expect(screen.getByText('Test Inhalt')).toBeInTheDocument();
  });

  test('rendert Icon wenn angegeben', () => {
    render(<Card icon="star" content="Test" />);
    expect(document.querySelector('.bi-star')).toBeInTheDocument();
  });

  test('wendet benutzerdefinierte Styles an', () => {
    const { container } = render(
      <Card 
        content="Test"
        backgroundColor="red"
        textColor="white"
        className="custom-class"
      />
    );
    
    const card = container.firstChild;
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveStyle({ background: 'red' });
  });
}); 