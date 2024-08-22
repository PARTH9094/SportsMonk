import React from 'react';
import Scoreboard from './Scorecard';

const Scorecard_2 = () => {
  const matches = [
    {
      live: false,
      time: "01:23",
      team1: { name: 'Spain', icon: '/path-to-spain-icon.png' },
      team2: { name: 'Netherlands', icon: '/path-to-netherlands-icon.png' },
      score: "2 - 1",
    },
    {
      live: false,
      time: "13:40",
      team1: { name: 'Japan', icon: '/path-to-japan-icon.png' },
      team2: { name: 'Sweden', icon: '/path-to-sweden-icon.png' },
      score: "2-3",
    },
    {
      live: false,
      time: "18:20",
      team1: { name: 'Olympiakos', icon: '/path-to-olympiakos-icon.png' },
      team2: { name: 'Genk', icon: '/path-to-genk-icon.png' },
      score: "1-4",
    },
  ];

  return (
    <div className='mt-6'>
      <Scoreboard 
        tournament="spain - la liga"
        stage="Quarter Finals"
        matches={matches}
      />
    </div>
  );
};

export default Scorecard_2;
