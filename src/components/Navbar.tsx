import { linkList } from "@/data/linkList";
import React from "react";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className=" py-2.5 rounded flex justify-center">
      <div className="container flex flex-wrap items-center justify-between ">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="text-gradient self-center text-[1.3rem] font-semibold whitespace-nowrap text-white">
            Olivier.
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          logo
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            {linkList.map((link) => (
              <li key={link.url}>
                <NavbarLink href={link.url}>{link.label}</NavbarLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
