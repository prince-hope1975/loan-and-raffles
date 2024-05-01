"use client";
import React, { useState } from "react";
import Allpage from "./Components/page";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu/page";
import DropdownMenuHamburger from "./Hamburger/page";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Cards from "./Cards/page";

const HomePage = () => {
  return (
    <main className="bg-black min-h-screen font-sans text-white p-6">
      {/* LOGO & NAV AREA */}
      <div>
        <div className="flex justify-between items-center">
        <h1 className="font-bold">TRON CHAIN</h1>
        <div className="flex gap-2 items-center">
          <Link
            href="#"
            className="bg-gray-700 w-8 h-8 rounded-md flex justify-center items-center"
          >
            <FaBell />
          </Link>
          <DropdownMenu />
          <DropdownMenuHamburger />
        </div>
      </div>

      <div className=" flex gap-10 justify-center pt-12">
        <Link href="#">All</Link>
        <Link href="/LoansPage">My Loans</Link>
        <Link href="#">Funded by me</Link>
      </div>

      <div className="flex justify-center gap-7 py-4">
        <div className="flex items-center">
        <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <IoSearch className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="search"
                name="search"
                placeholder="Search.."
              ></input>
            </div>
        </div>
        <Link
            href="#"
            className="bg-gray-700 w-10 h-10 rounded-md flex justify-center items-center"
          >
           <BiFilter className="text-white text-2xl" />
          </Link>
       
      </div>
      
    </div>
      <Cards/>
    </main>
  );
};

export default HomePage;
