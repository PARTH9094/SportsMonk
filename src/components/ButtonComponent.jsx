import { Button } from "@/components/ui/button";
import React, { useState } from 'react';

const ButtonComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleButtonClick = (date) => {
    setSelectedDate(date);
    onDateChange(date); 
  };

  const days = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  return (
    <div className="mt-5 flex gap-[6px] pl-[14px] pb-6 pr-[22px]">
      {days.map((day) => (
        <Button
          key={day}
          className={`w-24 h-10 text-center ${
            selectedDate === day ? 'bg-bgColor_active' : 'bg-bgColor_primary'
          }`}
          onClick={() => handleButtonClick(day)}
        >
          {new Date(day).toLocaleDateString('en-US', { weekday: 'long' })}<br />
          {new Date(day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </Button>
      ))}
      <Button
        className="w-24 h-10 bg-bgColor_primary"
        onClick={() => handleButtonClick(new Date().toISOString().split('T')[0])} 
      >
        View Calendar
      </Button>
    </div>
  );
};

export default ButtonComponent;
