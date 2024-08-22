import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';

const ButtonComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonClick = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Notify parent component of the date change
  };

  // Define the last 6 days
  const days = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  }).reverse();

  return (
    <div className="mt-5 flex gap-[6px] pl-[14px] pb-6 pr-[22px]">
      {days.map((day) => (
        <Button
          key={day}
          className="w-24 h-10 bg-bgColor_primary"
          onClick={() => handleButtonClick(day)}
        >
          {new Date(day).toLocaleDateString('en-US', { weekday: 'long' })}
        </Button>
      ))}
      <Button
        className="w-24 h-10 bg-bgColor_primary"
        onClick={() => handleButtonClick(new Date().toISOString().split('T')[0])} // Today’s date
      >
        View Calendar
      </Button>
    </div>
  );
};
export default ButtonComponent;
