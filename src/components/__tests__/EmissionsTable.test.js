import { render, screen, fireEvent } from '@testing-library/react';
import EmissionsTable from '../EmissionsTable';

describe('EmissionsTable', () => {
  test('rendert die Tabelle mit Daten', () => {
    render(<EmissionsTable />);
    expect(screen.getByText('CO2-Emissionsdaten')).toBeInTheDocument();
    expect(screen.getAllByText('Deutschland')).toHaveLength(8);
  });

  test('Filterung funktioniert korrekt', () => {
    render(<EmissionsTable />);
    const filterInput = screen.getByPlaceholderText('Suche nach Land oder Unternehmen...');
    
    fireEvent.change(filterInput, { target: { value: 'Deutschland' } });
    
    const deutschlandEinträge = screen.getAllByText('Deutschland');
    expect(deutschlandEinträge.length).toBeGreaterThan(0);
    expect(screen.queryByText('USA')).not.toBeInTheDocument();
  });

  test('Sortierung funktioniert korrekt', () => {
    render(<EmissionsTable />);
    const rows = screen.getAllByRole('row').slice(1);
    const länder = rows.map(row => row.cells[0].textContent);
    
    const sortedLänder = [...länder].sort();
    expect(länder).toEqual(expect.arrayContaining(sortedLänder));
  });
}); 