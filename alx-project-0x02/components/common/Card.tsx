import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
