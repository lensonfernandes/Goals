import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i3ECAB4jIyg3h45KKvTOFTWuru9J6oAiIQ&usqp=CAU"
        alt="logo"
        width={300}
        height={100}
        className="w-44 md:w-56 pb-14 md:pb-0 object-contain"
      />

      <div>
        {/* Search */}
        <form>
          <input type="text" />
          <button hidden>Search</button>
        </form>
        {/* 
        Person */}
      </div>
    </header>
  );
};

export default Header;
