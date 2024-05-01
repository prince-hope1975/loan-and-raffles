"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountPinCircleLine, RiArrowDropDownLine } from "react-icons/ri";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-gray-700 w-12 h-8 rounded-md flex justify-center items-center gap-2 p-1 "
      >
        <RiAccountPinCircleLine className="text-2xl" />
        <RiArrowDropDownLine className="text-lg" />
      </button>
      {isOpen && (
        <ul
          className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white 
        shadow-md rounded-md py-2 px-12 mt-1"
        >
          <li className="text-center text-black">
            <Link href="#">Connect</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;
