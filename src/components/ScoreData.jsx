import React, { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { LuDot } from "react-icons/lu";
import { Button } from "@/components/ui/button"
import Scorecard_1 from './Scorecard_1';
import Scorecard_2 from './Scorecard_2'
import SearchInput from './SearchInput';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import ButtonComponent from './ButtonComponent'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ScoreData(props) {
    const [days, setDays] = useState([]);

    useEffect(() => {
        const BASE_URL = "https://api.sportmonks.com/v3";
        const API_KEY = "KNK63t9NyL1x67TEeQf90vDp6QBbH2IKj0m9rpEc4LhqYXJuZMvPLYqlnPTS";

        const lastSixDays = Array.from({ length: 6 }, (_, i) => {
            const date = subDays(new Date(), i + 1); 
            return {
                formatted: format(date, 'yyyy-MM-dd'), 
                display: format(date, 'EEEE'), 
            };
        }).reverse(); 

        const fetchDataForDate = async (date) => {
            const API_URL = `${BASE_URL}/football/fixtures/date/${date.formatted}?api_token=${API_KEY}`;
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                return { ...date, fixtures: data.fixtures || [] };
            } catch (error) {
                console.error("Error fetching data:", error);
                return { ...date, fixtures: [] };
            }
        };

        const fetchAllData = async () => {
            const fetchedDays = await Promise.all(lastSixDays.map(fetchDataForDate));
            setDays(fetchedDays);
        };

        fetchAllData();
    }, []);


    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className='mt-5 ml-6 bg-bgColor rounded-[20px] w-[732px]'>
            <div className='flex justify-between items-center pl-3 pt-5 pr-5'>
                <div className='flex items-center'>
                    <LuDot className=' text-primaryColor2' size={20} />
                    <Label htmlFor="live" className='font-bold text-primaryColor2 p-4 '>Live</Label>
                </div>
                <SearchInput placeholder={"Search for Matches"} className='w-72 h-8' />
                <DropdownMenu >
                    <DropdownMenuTrigger className='text-white'>All Matches</DropdownMenuTrigger>
                    {/* <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent> */}
                </DropdownMenu>
            </div>
            {/* <div>
                <ButtonComponent />
            </div> */}

            <div>
                <div>
                    <ButtonComponent onDateChange={handleDateChange} />
                    {selectedDate && <Scorecard_1 selectedDate={selectedDate} />}
                </div>
                {/* <Scorecard_1 /> */}
                {/* <Scorecard_2 className='mt-6' /> */}
            </div>
        </div>
    )
}
