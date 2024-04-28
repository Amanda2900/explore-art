"use client";

import { useState } from "react";

export default function Navbar() {
  const searchRoute = '/search';
  const homeRoute = '/';
  const aboutRoute = 'https://github.com/Amanda2900';
  const contactRoute = 'mailto:amanda.dinoto@gmail.com';

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
  
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://github.com/Amanda2900/explore-art" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/sculpture.png" class="h-8" alt="Sculpture line art icon" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Explore Art</span>
        </a>
        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600" onClick={() => setNavbarOpen(!navbarOpen)} aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={"w-full md:block md:w-auto lg:flex" +
              (navbarOpen ? " flex" : " hidden")} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a href={homeRoute} className="block py-2 px-3 rounded md:border-0 md:hover:text-rose-500 md:p-0 text-white hover:bg-rose-500 hover:text-white md:hover:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href={searchRoute} className="block py-2 px-3 rounded md:border-0 md:hover:text-rose-500 md:p-0 text-white hover:bg-rose-500 hover:text-white md:hover:bg-transparent">Search</a>
            </li>
            <li>
              <a href={contactRoute} className="block py-2 px-3 rounded md:border-0 md:hover:text-rose-500 md:p-0 text-white hover:bg-rose-500 hover:text-white md:hover:bg-transparent">Contact</a>
            </li>
            <li>
              <a href={aboutRoute} className="block py-2 px-3 rounded md:border-0 md:hover:text-rose-500 md:p-0 text-white hover:bg-rose-500 hover:text-white md:hover:bg-transparent">About Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
};