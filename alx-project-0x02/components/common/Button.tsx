import React from 'react';
import { type ButtonProps } from '../../interfaces';

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  return (
    <button
      className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${sizeClasses[size]} ${shape}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
