import React, { ReactNode } from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
