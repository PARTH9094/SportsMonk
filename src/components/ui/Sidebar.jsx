import React from 'react';
import { FaHome, FaUser, FaTrophy, FaMapMarkerAlt, FaComments, FaRegBell, FaCog, FaDownload, FaChevronRight, FaUserCircle, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';
import { LuHome, LuUsers } from "react-icons/lu";
import { PiSpeakerHifiThin } from "react-icons/pi";
import { FiMessageCircle, FiSpeaker } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaShield } from "react-icons/fa6";
import { Input } from "@/components/ui/input"

import Span from '../Span'
import ListItem from '../ListItem';
import DarkModeToggle from '../ToggleButton';
import SearchInput from '../SearchInput';

const Sidebar = () => {


  const handleToggle = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };


  return (
    <div className="mt-12 ml-4 px-4 rounded-[20px] max-w-72  bg-bgColor text-white flex flex-col ">
      <div>
        <div className="text-center mt-8 pt-6 font-bold text-lg mb-7">
          <Span className={" text-white font-extrabold text-[25px] italic"} title='FOOTBALL' />
          <Span className="text-primaryColor2 font-normal text-[25px] italic" title="SHURU"></Span>
        </div>

        {/* <div className="px-4 mt-7 relative">
          <CiSearch className='absolute top-2 h-6 w-6 left-6' />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 placeholder:text-center pl-8 pr-4 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
        </div> */}

        <SearchInput placeholder={"Search"} className='px-4' />


        <nav className="mt-[30px]">
          <ul>
            <ListItem IconLeft={LuHome} title="Home" isBold={true} textSize="text-xl" />
            <ListItem IconLeft={LuUsers} title="Leader Board" isBold={true} textSize="text-xl" />
            <ListItem IconLeft={FiSpeaker} title="Ground" isBold={true} textSize="text-xl" />
            <ListItem IconLeft={FiMessageCircle} title="Chat" isBold={true} textSize="text-xl" />
            <ListItem IconLeft={FaRegBell} title="Notification" isBold={true} textSize="text-xl" />

          </ul>
        </nav>

        <hr className="mt-[30px] mb-5 mx-6 border-white" />

        <nav>
          <ul>
            <ListItem title="Followed Team" IconLeft={FaShield} IconRight={FaChevronRight} />
            <ListItem className='overflow-hidden' title="Followed Players" IconLeft={FaUser} IconRight={FaChevronRight} />
            <ListItem title="Followed Ground" IconLeft={FiSpeaker} IconRight={FaChevronRight} />
          </ul>
        </nav>
      </div>

      <hr className="mt-3 mb-8 mx-6 border-white" />

      <div className="">
        <ul>
          <ListItem title="Settings" IconLeft={FaCog} />
          <ListItem title="Download The App" IconLeft={FaDownload} />
        </ul>


        <div className="flex items-center justify-between mt-6">
          <div className=" flex items-center justify-center rounded-[10px] bg-bgColor_primary m-auto">
            <DarkModeToggle onToggle={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
