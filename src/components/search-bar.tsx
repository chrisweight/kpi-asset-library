'use client';

import { useRef, useState } from "react";
import { SearchIcon } from "./icons";
import { useSearchStore } from '@/providers/search-store.provider';

export function SearchBar() {
  const { recentSearches, addRecentSearch, updateCurrentSearch, clearCurrentSearch, currentSearch } = useSearchStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  const handleChange = () => {
    const v = inputRef.current?.value;
  
    if (!v || v === '') {
      clearCurrentSearch();
      setHasFocus(false);
      return;
    }

    !hasFocus && setHasFocus(true);
    updateCurrentSearch(v);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const v = inputRef.current?.value;

    if (event.key === 'Enter') {
      (v && v !== '') && addRecentSearch(v);
    }
  }
  
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full">
        <input 
          type="search" 
          className="w-full backdrop-blur-sm bg-white py-3 pl-10 pr-4 rounded-xl focus:outline-none border-2 border-gray-200 focus:border-grey-300 transition-colors duration-300" 
          placeholder="Type to search and press Enter to add to recent searches..."
          onChange={() => handleChange()}
          onKeyDown={(evt) => handleKeyDown(evt)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          ref={inputRef}
          value={currentSearch ?? ''}
        ></input>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="text-gray-400" />
        </div>
        {
          hasFocus && recentSearches?.length > 0 && 
            <div className="absolute rounded-xl bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 w-full mt-2">
            { 
              recentSearches?.map((searchTerm) => (
                <li
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md" 
                  key={searchTerm}
                  onMouseDown={() => updateCurrentSearch(searchTerm)}
                >{searchTerm}</li>
              ))
            }
            </div>
        }
      </div>
    </div>
  ); 
}