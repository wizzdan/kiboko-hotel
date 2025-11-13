
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-block font-sans tracking-wider uppercase px-8 py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105";
  const primaryClasses = "bg-gold text-white hover:bg-yellow-700";
  const secondaryClasses = "border-2 border-gold text-gold hover:bg-gold hover:text-white";
  
  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
