import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { LuDot } from "react-icons/lu";
import Scorecard_1 from './Scorecard_1';
import SearchInput from './SearchInput';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import ButtonComponent from './ButtonComponent';
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuery } from '@tanstack/react-query';
const apiKey = import.meta.env.VITE_API_KEY; 

const fetchFixtures = async (date) => {
  const BASE_URL = "https://api.sportmonks.com/v3";
  // const API_KEY = conf.apiKey;
  const API_URL = `${BASE_URL}/football/fixtures/date/${date}?api_token=${apiKey}`;

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  const data = await response.json();
  return data.fixtures || [];
};

const useFetchLastSixDays = () => {
  const lastSixDays = Array.from({ length: 6 }, (_, i) => {
    const date = subDays(new Date(), i + 1);
    return {
      formatted: format(date, 'yyyy-MM-dd'),
      display: format(date, 'EEEE'),
    };
  }).reverse();

  return lastSixDays;
};

export default function ScoreData() {
  const [selectedDate, setSelectedDate] = useState(null);
  const days = useFetchLastSixDays();

  const { data: fixtures = [], isLoading, error } = useQuery({
    queryKey: ['fixtures', selectedDate],
    queryFn: () => fetchFixtures(selectedDate),
    enabled: !!selectedDate, 
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='mt-5 ml-6 bg-bgColor rounded-[20px] w-[732px]'>
      <div className='flex justify-between items-center pl-3 pt-5 pr-5'>
        <div className='flex items-center'>
          <LuDot className='text-primaryColor2' size={20} />
          <Label htmlFor="live" className='font-bold text-primaryColor2 p-4 '>Live</Label>
        </div>
        <SearchInput placeholder={"Search for Matches"} className='w-72 h-8' />
        <DropdownMenu >
          <DropdownMenuTrigger className='text-white'>All Matches</DropdownMenuTrigger>
        </DropdownMenu>
      </div>
      <div>
        <ButtonComponent onDateChange={handleDateChange} />
        {error && <div>Error fetching matches</div>}
        {selectedDate && <Scorecard_1 selectedDate={selectedDate} />}
      </div>
    </div>
  );
}
