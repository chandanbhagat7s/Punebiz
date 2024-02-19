import React, { useState } from "react";
import Component from "./NavBar";
import logoImg from "./../assets/logo.png";
import { Hidden } from "@mui/material";

export default function Navv() {
  const [hidden, setHidden] = useState(false);
  function handleClick() {
    setHidden(hidden ? false : true);
  }
  return (
    <>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
              <div className="flex flex-shrink-0 items-center lg:hidden md:hidden">
                <img className="h-8 w-auto" src={logoImg} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block sm:w-full">
                <div className="container mx-auto flex items-center justify-between ">
                  <div className="flex items-center space-x-8">
                    <button className="text-white text-sm font-medium hover:border rounded-full px-2 py-1">
                      Home
                    </button>
                    <button className="text-white text-sm font-medium hover:text-gray-300 hover:border rounded-full px-2 py-1">
                      Businesses
                    </button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      alt="Workflow"
                      className="block lg:hidden h-10 w-auto"
                      // height="32"
                      src={logoImg}
                      // width="32"
                    />
                    <img
                      alt="Workflow"
                      className="hidden lg:block h-12 w-auto"
                      src={logoImg}
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-white hover:border rounded-full px-2 py-1 ">
                      Register Business
                    </button>
                    <button className="bg-white text-black text-sm py-2 px-4 rounded-full">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className={`space-y-1 px-2 pb-3 pt-2 ${hidden ? "" : "hidden"}`}>
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Businesses
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Register Business
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}