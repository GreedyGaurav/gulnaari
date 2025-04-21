import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-md';
  
  const variants = {
    primary: 'bg-maroon-600 text-white hover:bg-maroon-700 focus:ring-2 focus:ring-maroon-500 focus:ring-opacity-50',
    secondary: 'bg-gold-400 text-gray-900 hover:bg-gold-500 focus:ring-2 focus:ring-gold-400 focus:ring-opacity-50',
    outline: 'border border-maroon-600 text-maroon-600 hover:bg-maroon-50 focus:ring-2 focus:ring-maroon-500 focus:ring-opacity-25',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};