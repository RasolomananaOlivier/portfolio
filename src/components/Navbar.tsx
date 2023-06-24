"use client";

import { linkList } from "@/data/linkList";
import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import { debounce } from "@/utils/helpers";

import { BsMenuApp, BsMenuButton } from "react-icons/bs";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // @ts-ignore
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
    // timer set to 100 milliseconds:
  }, 100);
  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    // height: "60px",
    width: "100%",
    textAlign: "center",
    transition: "top 0.6s",
  };

  return (
    <nav
      className="px-3 md:px-0 rounded flex justify-center my-5 z-50"
      // @ts-ignore
      style={{ ...navbarStyles, top: visible ? "0" : "-100px" }}
    >
      <div className="container flex flex-wrap items-center justify-between px-5 py-3 rounded-lg bg-blue-950 backdrop-filter backdrop-blur-xl shadow-lg">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="text-gradient self-center text-[1.3rem] font-semibold whitespace-nowrap text-white">
            Olivier.
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-slate-50 focus:text-slate-950 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleDrawer}
        >
          <AiOutlineMenu />
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {linkList.map((link) => (
              <li key={link.url}>
                <NavbarLink href={link.url}>{link.label}</NavbarLink>
              </li>
            ))}

            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Resume</span>
            </button>
          </ul>
        </div>
      </div>

      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
}
