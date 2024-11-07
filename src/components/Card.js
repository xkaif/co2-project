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
        {(icon || title) && (
          <div className="d-flex align-items-center mb-4">
            {icon && <i className={`bi bi-${icon} fs-3 me-2`}></i>}
            {title && <h3 className="h4 mb-0">{title}</h3>}
          </div>
        )}
        <p className="mb-0">{content}</p>
      </div>
    </div>
  );
};

export default Card;
