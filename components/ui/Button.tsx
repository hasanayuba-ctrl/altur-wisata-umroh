import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-sans font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#064E3B] text-white hover:bg-[#064E3B]/90 focus:ring-[#064E3B]',
    secondary: 'bg-[#D4A843] text-white hover:bg-[#D4A843]/90 focus:ring-[#D4A843]',
    outline: 'border-2 border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-white focus:ring-[#D4A843]',
    ghost: 'text-[#064E3B] hover:bg-[#064E3B]/10 focus:ring-[#064E3B]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
