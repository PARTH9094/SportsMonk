import React from 'react';

const ListItem = ({ 
    IconLeft, 
    title, 
    IconRight, 
    onClick, 
    isBold = false, 
    textSize = "text-base"
}) => {
    return (
        <li
            className={`flex items-center mx-6 my-2.5  cursor-pointer ${
                isBold ? "font-bold text-xl" : "font-normal"
            }`}
            onClick={onClick}
        >
            {IconLeft && <IconLeft className="mr-4 h-5 w-5" />}
            <span className={textSize}>{title}</span>
            {IconRight && <IconRight className="ml-auto h-5 w-5" />}
        </li>
    );
};

export default ListItem;
