import React, { useState } from 'react';
import emissionsData from '../data/emissionsData';

const EmissionsTable = () => {
  const [filterText, setFilterText] = useState(''); // Filterzustand für Land und Unternehmen
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // Sanitize-Funktion hinzufügen
  const sanitizeInput = (input) => {
    return input.replace(/[<>'"&]/g, '');
  };

  // Aktualisierte onChange-Handler
  const handleFilterChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setFilterText(sanitizedValue);
  };

  // Filterfunktion für Land und Unternehmen
  const filteredData = emissionsData.filter(row => 
    filterText === '' ||
    row.land.toLowerCase().includes(filterText.toLowerCase()) ||
    row.unternehmen.toLowerCase().includes(filterText.toLowerCase())
  );

  // Sortierfunktion
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortColumn) {
      const order = sortDirection === 'asc' ? 1 : -1;
      if (a[sortColumn] < b[sortColumn]) return -1 * order;
      if (a[sortColumn] > b[sortColumn]) return 1 * order;
      return 0;
    }
    return 0;
  });

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="card shadow-lg p-4 rounded-3">
      <h2 className="mb-3" style={{ color: '#00bc8c' }}>CO2-Emissionsdaten</h2>
      <p className="text-muted mb-4">
        Diese Tabelle zeigt die CO2-Emissionen von Unternehmen in verschiedenen Ländern.
      </p>
      
      <div className="input-group mb-4">
        <span className="input-group-text" style={{ background: '#00bc8c', color: 'white' }}>
          <i className="bi bi-search"></i>
        </span>
        <input 
          type="text" 
          placeholder="Suche nach Land oder Unternehmen..." 
          value={filterText} 
          onChange={handleFilterChange} 
          className="form-control border-start-0"
          maxLength={50}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr style={{ background: '#f8f9fa' }}>
              <th onClick={() => handleSort('land')} 
                  className="cursor-pointer user-select-none"
                  style={{ color: '#00bc8c' }}>
                <div className="d-flex align-items-center gap-2">
                  Land
                  <i className={`bi bi-arrow-${sortColumn === 'land' && sortDirection === 'desc' ? 'down' : 'up'}`}></i>
                </div>
              </th>
              <th onClick={() => handleSort('unternehmen')} 
                  className="cursor-pointer user-select-none"
                  style={{ color: '#00bc8c' }}>
                <div className="d-flex align-items-center gap-2">
                  Unternehmen
                  <i className={`bi bi-arrow-${sortColumn === 'unternehmen' && sortDirection === 'desc' ? 'down' : 'up'}`}></i>
                </div>
              </th>
              <th onClick={() => handleSort('emissionen')} 
                  className="cursor-pointer user-select-none"
                  style={{ color: '#00bc8c' }}>
                <div className="d-flex align-items-center gap-2">
                  <span>Emissionen (Tonnen CO2)</span>
                  <i className={`bi bi-arrow-${sortColumn === 'emissionen' && sortDirection === 'desc' ? 'down' : 'up'}`}></i>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index} className="align-middle">
                <td>{row.land}</td>
                <td>{row.unternehmen}</td>
                <td>{row.emissionen.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {sortedData.length === 0 && (
        <div className="text-center text-muted py-4">
          <i className="bi bi-search fs-1 mb-3 d-block"></i>
          Keine Ergebnisse gefunden
        </div>
      )}
    </div>
  );
};

export default EmissionsTable;