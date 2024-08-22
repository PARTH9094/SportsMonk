import React, { useEffect, useState } from 'react';
import Scoreboard from './Scorecard';

const Scorecard_1 = ({ selectedDate }) => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchScores = async () => {
      const BASE_URL = "https://api.sportmonks.com/v3";
      const API_KEY = "KNK63t9NyL1x67TEeQf90vDp6QBbH2IKj0m9rpEc4LhqYXJuZMvPLYqlnPTS";
      const API_URL = `${BASE_URL}/football/fixtures/date/${selectedDate}?api_token=${API_KEY}&include=scores;league;participants`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const leagueMap = {};
        data.data.forEach((match) => {
          const leagueId = match.league.id;
          if (!leagueMap[leagueId]) {
            leagueMap[leagueId] = {
              leagueName: match.league.name,
              leagueIcon: match.league.image_path,
              matches: []
            };
          }
          const homeTeam = match.participants.find((p) => p.meta.location === "home");
          const awayTeam = match.participants.find((p) => p.meta.location === "away");
          leagueMap[leagueId].matches.push({
            live: match.state_id === 3,
            time: match.starting_at,
            team1: { name: homeTeam.name, icon: homeTeam.image_path },
            team2: { name: awayTeam.name, icon: awayTeam.image_path },
            score: `${match.scores.find(s => s.score.participant === "home").score.goals} - ${match.scores.find(s => s.score.participant === "away").score.goals}`,
          });
        });

        setLeagues(Object.values(leagueMap));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchScores();
  }, [selectedDate]);

  return (
    <div>
      {leagues.map((league, index) => (
        <Scoreboard
          key={index}
          tournament={league.leagueName}
          stage="Quarter Finals" 
          matches={league.matches}
        />
      ))}

      {/* {leagues.map((league, index) => (
        <div key={index}>
          {league.length > 0 ? (
            <Scoreboard
              tournament={league.tournament} // Replace with your tournament data
              stage={league.stage} // Replace with your stage data
              matches={league}
            />
          ) : (
            <div>No matches available for this date.</div>
          )}
        </div>
      ))}; */}



    </div>
  );
};

export default Scorecard_1;