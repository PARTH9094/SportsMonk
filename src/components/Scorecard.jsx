import React from 'react';

const Scoreboard = ({ tournament, stage, matches }) => {
    return (
      <div className="scoreboard bg-bgColor text-white rounded-lg p-4">
        <div className="header flex justify-between items-center border-b pb-2 mb-2">
          <div className="tournament-name font-semibold">
            {tournament}
          </div>
          <div className="stage text-gray-400">
            {stage}
          </div>
        </div>
  
        <div className="match-row">
          {matches.map((match, index) => (
            <MatchRow key={index} {...match} />
          ))}
        </div>
      </div>
    );
  };
  

const MatchRow = ({ live, time, team1, team2, score }) => {
  return (
    <div className={`flex justify-between items-center p-2 ${live ? 'bg-bgColor_primary rounded-xl'  : 'bg-bgColor'}`}>
      <div className="time text-gray-400 w-1/4">
        {live ? <span className="text-green-500">Live</span> : time}
      </div>
      <div className="teams flex items-center justify-between w-2/4">
        <Team {...team1} className=' max-w-24 w-1/3'/>
        <span className="score mx-4 max-w-24 w-1/3">{score}</span>
        <Team {...team2} className='max-w-24 w-1/3'/>
      </div>
    </div>
  );
};

const Team = ({ name, icon }) => {
  return (
    <div className="team flex items-center w-1/3">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 mr-2 object-contain"
        />
      )}
      <span>{name}</span>
    </div>
  );
};


export default Scoreboard;
