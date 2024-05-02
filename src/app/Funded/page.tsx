'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBell, FaWallet } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { IoSearch, IoTicketSharp } from "react-icons/io5";
import DropdownMenu from "../DropdownMenu/page";
import DropdownMenuHamburger from "../Hamburger/page";



const FundedPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen font-sans text-white md:flex">
      {/* Logo */}
      <div className="md:w-1/5 md:bg-gray-700 md:p-0 overflow-hidden fixed h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="mt-6">
            <h1 className="font-bold text-xl md:text-2xl m-0 p-6 text-white">TRON CHAIN</h1>
            {/* nav links */}
            {!isMobile && (
              <div className="text-white px-6 pt-8">
                <Link href="#" className="flex items-center gap-3 py-2 hover:text-gray-400">
                  <FaWallet />
                  Loan
                </Link>
                <Link href="/Raffle" className="flex items-center gap-3 py-2 hover:text-gray-400">
                  <IoTicketSharp />
                  Raffle
                </Link>
              </div>
            )}
          </div>
          {/* Contacts */}
          {!isMobile && (
            <div className="flex flex-col gap-2 text-white px-6 mt-auto pb-4">
              <Link href="#" className="hover:text-gray-400">Twitter</Link>
              <Link href="#" className="hover:text-gray-400">Discord</Link>
              <Link href="#" className="hover:text-gray-400">LinkedIn</Link>
              <Link href="#" className="hover:text-gray-400">Instagram</Link>
              <Link href="#" className="hover:text-gray-400">Docs</Link>
            </div>
          )}
        </div>
      </div>

      <div className="md:w-4/5 md:pl-6 md:ml-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:px-6 md:pt-4">
          {isMobile && <DropdownMenuHamburger />}
          <div className="flex-grow" />
          {/* Move the flex container here for mobile view */}
          <div className="flex items-center space-x-2 md:hidden">
            <DropdownMenu />
            <Link
              href="#"
              className="bg-gray-700 w-8 h-8 rounded-md flex justify-center items-center"
            >
              <FaBell />
            </Link>
          </div>
        </div>
        <div className="flex flex-row md:flex-row md:items-center md:space-x-4 md:px-6 md:pb-2">
          <Link
            href=""
            className="text-white hover:bg-gray-700 px-7 py-2 rounded-md"
          >
            All
          </Link>
          <Link
            href="/LoansPage"
            className="text-white hover:bg-gray-700 px-7 py-2 rounded-md"
          >
            My Loans
          </Link>
          <Link
            href="/Funded"
            className="text-white hover:bg-gray-700 px-7 py-2 rounded-md"
          >
            Funded by me
          </Link>
        </div>

        {/* Search bar and filter button */}
        <div className="flex flex-row gap-4 md:gap-4 md:flex-row md:items-center px-6">
          <div className="flex md:items-center md:w-11/12 md:px-6">
            <div className="bg-[#d8dade] w-full p-1 flex items-center mb-1 rounded-md ">
              <IoSearch className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="search"
                name="search"
                placeholder="Search.."
              />
            </div>
          </div>
          <div>
            <Link
              href="#"
              className="bg-gray-700 w-10 h-10 rounded-md flex justify-center items-center"
            >
              <BiFilter className="text-white text-2xl" />
            </Link>
          </div>
        </div>

       
      </div>
    </main>
  );
};

export default FundedPage;
