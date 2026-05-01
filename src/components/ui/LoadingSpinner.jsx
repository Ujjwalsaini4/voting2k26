import React from 'react';

const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '50vh',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div className="typing-indicator" style={{ transform: 'scale(1.5)' }}>
      <div className="typing-dot"></div>
      <div className="typing-dot"></div>
      <div className="typing-dot"></div>
    </div>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Loading page...</p>
  </div>
);

export default LoadingSpinner;
