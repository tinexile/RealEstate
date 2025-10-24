import React from "react";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <>
      <nav className="px-5 bg-[#2B2B2B] text-white flex items-center justify-between h-10">
        <div className="text-lg font-bold" >Logo</div>
        <div>
          <SlMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
