import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import logoImg from "./../../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navi() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header className="bg-white py-2  lg:border-b-1 border-gray-500 shadow fixed-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center basis-1/2 lg:justify-around">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-600">PUNEBIZZ</h1>
              <p className="text-xs text-gray-500">Grow Your Business</p>
            </div>
            <div className="hidden md:block">
              {/* <div className=" flex items-baseline space-x-4 "> */}
              {/* <div className="flex-1 min-w-0 "> */}
              <Input
                className="w-full"
                placeholder="Search for...."
                type="search"
              />
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 font-semibold">
              <button className="px-3 py-2 hover:bg-gray-200 rounded">
                <Link to={"/"}>Home</Link>
              </button>
              <button className="px-3 py-2  hover:bg-gray-200 rounded">
                <Link to={"/businesses"}>Businesses</Link>
              </button>
              <button className="px-3 py-2  hover:bg-gray-200 rounded">
                <Link to={"/registerBusinesses"}>Register Business</Link>
              </button>
              <button className="px-3 py-2  hover:bg-gray-200 rounded">
                <Link to={"/login"}>Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="lg:hidden flex">
          <div className="ml-4 flex items-center md:ml-6 font-semibold">
            <button className="px-2 py-1  hover:bg-gray-200 rounded">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="px-2 py-1  hover:bg-gray-200 rounded">
              <Link to={"/businesses"}>Businesses</Link>
            </button>
            <button className="px-2 py-1  hover:bg-gray-200 rounded">
              <Link to={"/registerBusinesses"}>Register Business</Link>
            </button>
            <button className="px-2 py-1  hover:bg-gray-200 rounded">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Input
            className="w-full bg-[#EAFFFF] px-2 py-1"
            placeholder="Search for ..."
            type="search"
          />
        </div>
      </div>
    </header>
  );
}

function MoreVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
