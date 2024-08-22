import React from 'react';

const NewsCard = ({ image, title, time }) => {
  return (
    <div className="flex p-4 mb-4 bg-bgColor_primary rounded-lg">
      <img src={image} alt={title} className="w-20 h-20 rounded-lg object-cover mr-4" />
      <div className="flex flex-col justify-between">
        <h3 className="text-white text-sm font-semibold">{title}</h3>
        <div className="text-gray-400 text-xs">{time}</div>
      </div>
      <div className="ml-auto">
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 2h14a2 2 0 012 2v18l-7-5-7 5V4a2 2 0 012-2z" />
        </svg>
      </div>
    </div>
  );
};

export default NewsCard;
