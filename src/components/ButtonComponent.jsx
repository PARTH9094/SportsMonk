import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const ButtonComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); 

  const handleButtonClick = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const days = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen); 
  };

  const handleDateSelect = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
    onDateChange(formattedDate);
    setIsCalendarOpen(false); 
  };

  return (
    <div className="mt-5 flex gap-[6px] pl-[14px] pb-6 pr-[22px]">
      {days.map((day) => (
        <Button
          key={day}
          className={`w-24 h-10 text-center text-white rounded-sm ${
            selectedDate === day ? 'bg-primaryBlack' : 'bg-primaryGrey'
          }`}
          onClick={() => handleButtonClick(day)}
        >
          {new Date(day).toLocaleDateString('en-US', { weekday: 'long' })}<br />
          {new Date(day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </Button>
      ))}
      <div>
        <Button
          className="w-24 h-10 bg-primaryGrey text-white"
          onClick={handleCalendarClick}
        >
          View Calendar
        </Button>
        {isCalendarOpen && (
          <div className="absolute mt-2 border max-w-60 bg-white rounded-xl">
            <Calendar
              onChange={handleDateSelect}
              value={new Date(selectedDate)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonComponent;
