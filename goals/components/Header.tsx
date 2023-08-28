"use client";
import React , {useEffect, useState} from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import fetchSuggestion from "@/lib/fetchSuggestion";

const Header = () => {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
    
  ]);

  const [loading, setLoading] = useState<boolean>(false)
  const [suggestion, setSuggestion] = useState<string>("")

  useEffect(()=> {
    if(board.columns.size === 0 ) return;

    setLoading(true);

    const fetchSuggestionFunc = async () => {

      const suggestion =  await fetchSuggestion(board);

      setSuggestion(suggestion )
      setLoading(false)
      
    }

  }, [board])

  return (
    <header>
      <div className="flex flex-col md:flex-row  items-center p-5 bg-gray-500/10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-300 to-slate-400 rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i3ECAB4jIyg3h45KKvTOFTWuru9J6oAiIQ&usqp=CAU"
          alt="logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-14 md:pb-0 object-contain"
        />

        <div className="flex  items-center space-x-5 flex-1 justify-end w-full ">
          {/* Search */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md  flex-1 md:flex-initial">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          {/* 
        Person */}

          <Avatar name="len fern" round size="50" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5  py-2 md:py-5">
        <p className="flex items-center  text-sm font-light pr-5 p-5  shadow-xl rounded-xl w-fit bg-white italic max-w-3cl text-[#015502]">
          <UserCircleIcon className={`inline-block h-10 w-10 text-blue mr-1 ${loading && "animate-spin"}`} />
          {suggestion && !loading ? suggestion : 
          "We are summarizing your day..."}
        </p>
      </div>
    </header>
  );
};

export default Header;
