import React from 'react';

const Card = ({ 
  title, 
  content, 
  icon, 
  backgroundColor = 'linear-gradient(135deg, #00bc8c, #2ecc71)', 
  textColor = 'white',
  className = ''
}) => {
  return (
    <div 
      className={`card h-100 shadow-lg hover-card ${className}`} 
      style={{ 
        background: backgroundColor, 
        border: 'none', 
        borderRadius: '15px' 
      }}
    >
      <div className={`card-body p-4 text-${textColor}`}>
        <div className="d-flex align-items-center mb-4">
          {icon && <i className={`bi bi-${icon} fs-3 me-2`}></i>}
          <h3 className="h4 mb-0">
            <span style={{color: '#00bc8c'}}>{title}</span>
          </h3>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Card;
