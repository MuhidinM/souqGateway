"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ThemeTogle";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/types/types";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  console.log(pathname);

  const menuItems: MenuItem[] = [
    { title: "Home", url: "/", active: pathname === `/` },
    {
      title: "Documentation",
      url: "/documentation",
      active: pathname === `/documentation`,
    },
    { title: "Sandbox", url: "/sandbox", active: pathname === `/sandbox` },
  ];
  return (
    <div>
      <nav className="bg-gray-100 border-gray-200 fixed top-0 left-0 right-0 z-[100] dark:bg-gray-800 border-b dark:border-0">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Logo />
          <div className="flex md:order-2">
            <div className="space-x-4">
              <ModeToggle />
              <Link href={"/auth"}>
                <Button
                  variant={"outline"}
                  className={
                    "ring-2 text-cyan-500 ring-cyan-500 hover:text-cyan-400  hover:ring-cyan-400"
                  }
                >
                  SIGN IN
                </Button>
              </Link>
              <Link href={"/auth"}>
                <Button className={"text-white"}>SIGN UP</Button>
              </Link>
            </div>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-50 rounded-lg md:p-0 bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              {menuItems.map((menuItem) => (
                <li key={menuItem.title}>
                  <Link
                    href={menuItem.url}
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:p-0 md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                      menuItem.active
                        ? "text-cyan-500"
                        : "text-gray-900 dark:text-white"
                    }`}
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
