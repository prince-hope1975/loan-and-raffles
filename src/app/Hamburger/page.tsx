'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const DropdownMenuHamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-black/30 w-12 h-8 rounded-md flex justify-center items-center gap-2 p-1 "
      >
        {isMenuOpen ? (
          <GiCancel className="text-xl" /> 
        ) : (
          <GiHamburgerMenu className="text-xl" /> 
        )}
      </button>
      {isMenuOpen && (
        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 text-black bg-white shadow-md rounded-md py-2 px-12 mt-1">
          <li className="text-center">
            <Link href="#">Loans</Link>
          </li>
          <li className="text-center">
            <Link href="#">Raffle</Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};
export default DropdownMenuHamburger;