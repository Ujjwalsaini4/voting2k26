import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: 'var(--spacing-8) 0', 
      borderTop: '1px solid var(--color-border)',
      marginTop: 'var(--spacing-12)',
      backgroundColor: 'var(--color-surface)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: 'var(--spacing-2)' }}>
          © 2026 India Election Guide. Designed for voter awareness.
        </p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
          Disclaimer: This is an educational guide. For official information, always visit the 
          <a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', marginLeft: '4px' }}>
            Election Commission of India (ECI)
          </a> website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
