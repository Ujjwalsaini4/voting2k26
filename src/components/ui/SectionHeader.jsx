import React from 'react';

/**
 * Standard header for page sections.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.className]
 */
const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <header className={`text-center ${className}`} style={{ marginBottom: 'var(--spacing-8)' }}>
      <h1 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-2)' }}>{title}</h1>
      {subtitle && <p className="color-text-muted">{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;
