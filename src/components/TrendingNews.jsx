import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import NewsList from './Newslist';
import CustomCard from './CustomCard';

const TrendingNews = () => {
    const newsData = [
        {
            image: 'https://via.placeholder.com/150',
            title: 'Results And Scores From The Premier League....!!',
            time: '5 Hours Ago'
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Here Are The Top 100 Players And Managers',
            time: '21 Aug 2024, 06:00 AM'
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Results And Scores From The Premier League....!!',
            time: '20 Aug 2024, 09:00 PM'
        },
    ];

    return (
        <div className="bg-primaryBlack p-6 rounded-lg">
            <div className='flex justify-between'>

                <h2 className="text-white text-lg font-semibold">Trending News</h2>
                <FaChevronRight className='text-white'/>
            </div>
            <CustomCard/>
            <NewsList news={newsData} />
        </div>
    );
};

export default TrendingNews;
