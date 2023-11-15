"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ThemeTogle";
import Link from "next/link";
import Logo from "./Logo";
import { menuItems } from "@/constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-50 border-gray-200 dark:bg-gray-800 border-b dark:border-0">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Logo />
          <div className="flex md:order-2">
            <div className="mr-4">
              <ModeToggle />
            </div>

            <Link
              href={"/"}
              type="button"
              className="border border-blue-500 rounded-lg p-2 px-4 text-gray-900 mr-4 hover:bg-blue-500 hover:text-white dark:text-white"
            >
              Sign in
            </Link>
            <Link
              href={"/"}
              type="button"
              className="rounded-lg bg-blue-500 p-2 px-4 text-white hover:bg-white hover:text-gray-900 border border-blue-500 dark:hover:bg-gray-900 dark:hover:text-white"
            >
              Sign up
            </Link>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className={`inline-flex items-center justify-center w-10 h-10 p-2 ml-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
              aria-controls="navbar-search"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-50 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              {menuItems.map((menuItem) => (
                <li key={menuItem.title}>
                  <Link
                    href={menuItem.url}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
