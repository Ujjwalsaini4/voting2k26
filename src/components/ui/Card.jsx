import React from 'react';

/**
 * Reusable Card component for consistent styling and accessibility.
 */
const Card = React.memo(({ children, className = '', style = {}, ariaLabel }) => {
  return (
    <div 
      className={`card ${className}`} 
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
