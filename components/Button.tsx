
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  // Added 'type' prop to support button behaviors in forms
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  to, 
  onClick, 
  children, 
  variant = 'primary', 
  className = '',
  type = 'button' // Default to 'button' for safety in forms
}) => {
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

  // Pass the 'type' prop to the underlying HTML button element
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
