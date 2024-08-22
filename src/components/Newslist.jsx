import React from 'react';
import NewsCard from './Newscard';

const NewsList = ({ news }) => {
  return (
    <div className="mt-4">
      {news.map((item, index) => (
        <NewsCard 
          key={index} 
          image={item.image} 
          title={item.title} 
          time={item.time} 
        />
      ))}
    </div>
  );
};

export default NewsList;
