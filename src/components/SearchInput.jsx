import React from 'react';
import { CiSearch } from 'react-icons/ci'; // Ensure you have react-icons installed
import { Input } from "@/components/ui/input"

const SearchInput = ({placeholder}) => {
  return (
    <div className="relative">
      <CiSearch className='absolute top-2 h-6 w-6 left-3' />
      <Input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 placeholder:text-center pl-9 pr-4 rounded-lg bg-bgColor_primary text-white focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
