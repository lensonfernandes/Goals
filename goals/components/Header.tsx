"use client"
import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row  items-center p-5 bg-gray-500/10">
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
          <input type="text" placeholder="Search" className="flex-1 outline-none p-2"/>
          <button hidden type="submit">Search</button>
        </form>
        {/* 
        Person */}

        <Avatar name="len fern" round size="50"/>

      </div>
      </div>
    </header>
  );
};

export default Header;
