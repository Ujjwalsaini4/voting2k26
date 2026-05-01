import React from 'react';

/**
 * Reusable Button component with built-in accessibility and variants.
 */
const Button = React.memo(({ 
  children, 
  variant = 'primary', 
  disabled = false, 
  onClick, 
  ariaLabel, 
  type = 'button',
  className = ''
}) => {
  const variantClass = variant !== 'none' ? `btn-${variant}` : '';
  
  return (
    <button
      type={type}
      className={`${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
