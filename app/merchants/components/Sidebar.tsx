"use client";
import React from "react";
import { ModeToggle } from "@/components/ThemeTogle";
import Logo from "./Logo";
import { AlignJustify, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import Footer from "./Footer";
import Avatars from "./Avatar";
import { sideBar } from "@/constants";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";

const Sidebar = () => {
  const { data: session } = useSession();
  // console.log(session, status);
  const router = useRouter();
  return (
    <div className="">
      <div className="md:hidden flex items-center justify-between my-2 mx-4">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <AlignJustify />
        </button>
        <div className="md:hidden">
          <Logo />
        </div>
        <div className="md:hidden">
          <ModeToggle />
        </div>
      </div>
      <aside className="fixed top-0 left-0 h-screen w-64 flex transition-transform -translate-x-full sm:translate-x-0 shadow-sm">
        <div className="h-full w-full flex flex-col justify-between px-3 py-4 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="flex flex-col overflow-y-auto">
            <div className="flex items-center justify-center pb-2 mb-2">
              <Logo />
            </div>
            <div className="flex items-center justify-between pb-2 mb-2">
              <ul className="space-y-2 font-medium w-full">
                {sideBar.map(
                  (item) =>
                    !item.hide && ( // Render the list item only if item.hidden is false
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          {item.icon}
                          <span className="ms-3">{item.label}</span>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="items-center justify-between">
            <div className="flex flex-col">
              <div className="mb-2">
                <ul className="space-y-2 font-medium w-full ">
                  <li>
                    <Link
                      href="/merchants/setting"
                      className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <Settings />
                      <span className="ms-3">Setting</span>
                    </Link>
                  </li>
                  <li>
                    <Button
                      onClick={async () => {
                        await signOut();
                        router.push("/");
                      }}
                      className="w-full bg-red-500 hover:bg-red-600"
                    >
                      <LogOut />
                      <span className="ms-3">Log out</span>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between border dark:border-white p-2 rounded-lg items-center">
                <div className="flex">
                  <Avatars />
                </div>
                <div className="flex flex-col">
                  <p>Name Fname</p>
                  <span className="text-sm text-gray-400">
                    {session?.user?.email}
                  </span>
                </div>
                <div className="flex">
                  <ModeToggle />
                </div>
              </div>
              <Footer />  
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
