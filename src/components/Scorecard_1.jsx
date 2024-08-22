import React, { useEffect, useState } from 'react';
import Scoreboard from './Scorecard'; 


const Scorecard_1 = ({ selectedDate }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (!selectedDate) return; 

    const BASE_URL = "https://api.sportmonks.com/v3";
    const API_KEY = "KNK63t9NyL1x67TEeQf90vDp6QBbH2IKj0m9rpEc4LhqYXJuZMvPLYqlnPTS";
    const API_URL = `${BASE_URL}/football/fixtures/date/${selectedDate}?api_token=${API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data); 

        const fetchedMatches = data.data.map((fixture) => ({
          live: false, 
          time: new Date(fixture.starting_at).toLocaleTimeString(),
          team1: { name: fixture.name.split(' vs ')[0], icon: '' }, 
          team2: { name: fixture.name.split(' vs ')[1], icon: '' }, 
          score: fixture.result_info,
        }));

        setMatches(fetchedMatches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <div>
      <Scoreboard
        tournament="World - FIFA Women's World Cup"
        stage="Quarter Finals" 
        matches={matches}
      />
    </div>
  );
};

export default Scorecard_1;