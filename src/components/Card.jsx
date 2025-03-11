 import React from 'react';

function Card({ title, desc, image }) {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-[#bdc3c7] hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      
      {/* Content Section */}
      <div className="p-6">
        <p className="font-bold italic text-[18px] mb-2 text-gray-800">{title}</p>
        <p className="text-gray-600 text-[15px] ">{desc}</p>
      </div>
    </div>
  );
}

export default Card;