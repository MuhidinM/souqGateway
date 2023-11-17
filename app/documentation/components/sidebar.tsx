"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isOpen2, setIsOpen2] = React.useState(true);

  return (
    // <div className="mt-4 fixed top-20 left-0">
    <div className="mt-4 md:mt-20 md:flex md:flex-col md:fixed md:top-0 md:left-0">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="md:w-[250px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <CollapsibleTrigger asChild>
            <Link href="" className="flex w-full justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="flex w-full px-3 justify-between"
              >
                Get Started
                <ChevronDown className={`h-4 w-4 ${!isOpen && "-rotate-90"}`} />
                <span className="sr-only">Toggle</span>
              </Button>
            </Link>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className=" ml-8 ">
          <ul>
            <li>
              <Link href="/documentation">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex w-full px-2 m-0 justify-between"
                >
                  Introduction
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/documentation/quickstart">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex w-full px-2 m-0 justify-between"
                >
                  Quick Start
                </Button>
              </Link>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen2}
        onOpenChange={setIsOpen2}
        className="md:w-[250px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <CollapsibleTrigger asChild>
            <Link href="" className="flex w-full justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="flex w-full px-3 justify-between"
              >
                Setup Account
                <ChevronDown
                  className={`h-4 w-4 ${!isOpen2 && "-rotate-90"}`}
                />
                <span className="sr-only">Toggle</span>
              </Button>
            </Link>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2 ml-8">
          <ul>
            <li>
              <Link href="/documentation/activateaccount">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex w-full px-2 m-0 justify-between"
                >
                  Activate your account
                </Button>
              </Link>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
      <div className="flex items-center justify-between space-x-4 px-4">
        <Link
          href="/documentation/integration"
          className="flex w-full justify-between"
        >
          <Button
            variant="ghost"
            size="icon"
            className="w-full px-3 justify-start"
          >
            Build Payment Integration
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between space-x-4 px-4">
        <Link
          href="/documentation/products"
          className="flex w-full justify-between"
        >
          <Button
            variant="ghost"
            size="icon"
            className="w-full px-3 justify-start"
          >
            Products
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-between space-x-4 px-4">
        <Link
          href="/documentation/about"
          className="flex w-full justify-between"
        >
          <Button
            variant="ghost"
            size="icon"
            className="w-full px-3 justify-start"
          >
            About
          </Button>
        </Link>
      </div>
    </div>
  );
}
