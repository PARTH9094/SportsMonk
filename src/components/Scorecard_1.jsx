import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Scoreboard from './Scorecard';

const apiKey = import.meta.env.VITE_API_KEY; 

console.log("API Key",apiKey)

const fetchScores = async ({ queryKey }) => {
  const [, selectedDate] = queryKey;

  if (!selectedDate) return [];

  const BASE_URL = "https://api.sportmonks.com/v3";
  const API_URL = `${BASE_URL}/football/fixtures/date/${selectedDate}?api_token=${apiKey}&include=scores;league;participants`;

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }

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
      score: `${match.scores.find(s => s.score.participant === "home" && s.description === "2ND_HALF")?.score.goals || 0} - ${match.scores.find(s => s.score.participant === "away" && s.description === "2ND_HALF")?.score.goals || 0}`,
    });
  });

  return Object.values(leagueMap);
};

const useScores = (selectedDate) => {
  return useQuery({
    queryKey: ['scores', selectedDate],
    queryFn: fetchScores,
    enabled: !!selectedDate,
  });
};

const Scorecard_1 = ({ selectedDate }) => {
  const { data: leagues = [], isLoading, error } = useScores(selectedDate);

  if (isLoading) return <div className='text-white font-normal'>Loading...</div>;
  if (error) return <div className='text-white font-normal'>Error loading data</div>;

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
    </div>
  );
};

export default Scorecard_1;
