import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const DarkModeToggle = ({ onToggle }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const enableDarkMode = () => {
        setIsDarkMode(true);
        onToggle(true);
    };

    const enableLightMode = () => {
        setIsDarkMode(false);
        onToggle(false);
    };

    return (
        <div
            className={`flex items-center gap-5 p-1 max-w-72 rounded-full cursor-pointer ${isDarkMode ? 'justify-end' : 'justify-start'}`}
        >
            <Button
                onClick={enableLightMode}
                className={`ml-2 pl-6 ${isDarkMode ? 'text-gray-400' : 'text-white'} ${!isDarkMode ? 'bg-bgColor' : 'bg-bgColor_primary'}`}
            >
                <FaSun className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-yellow-400'}`} /> Light
            </Button>
            <Button
                onClick={enableDarkMode}
                className={`mr-2 pl-6 ${isDarkMode ? 'text-white' : 'text-gray-400'} ${isDarkMode ? 'bg-bgColor' : 'bg-bgColor_primary'}`}
            >
                <FaMoon className={`h-5 w-5 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} /> Dark
            </Button>
        </div>
    );
};

export default DarkModeToggle;
