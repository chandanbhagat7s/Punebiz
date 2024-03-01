import { CiGlobe } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function M2Cards() {
  return (
    <Link to={"/cardDetails"}>
      <div className="rounded-lg max-w-full p-2 flex flex-col md:flex-row items-center justify-content-center m-2 bg-sky-100 border-blue-700">
        <div className="w-64 h-64 md:w-32 md:h-32 overflow-hidden rounded-lg mx-3">
          <img
            alt="Vastrani Cloth Store"
            className="object-cover w-full h-full rounded-full"
            height="500"
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>

        <div className="flex flex-col justify-between align-items-start lg:align-self-start lg:ml-8 lg:mr-44 sm:p-2 lg:mt-0 flex-grow md:mt-4  ">
          <h2 className="text-lg font-semibold py-1">Vastrani</h2>
          <p className="text-xs text-gray-500 py-1">Cloth Store</p>
          <p className="text-xs py-1">Uruli Kanchan, Pune</p>
          <p className="text-xs py-1">Pune</p>
        </div>
        <div className="flex flex-col items-center lg:mx-5 justify-between ml-2 md:ml-0 mt-2 md:mt-0 w-30">
          <div>
            {/* <Button className="py-1" variant="ghost my-1"> */}
            <HeartIcon className="hover:text-red-700 text-gray-400 hover:scale-150" />
            {/* </Button> */}
          </div>
          <div className="flex items-center space-x-1 my-2">
            <LinkedinIcon className="text-blue-500 m-2 hover:scale-150" />
            <InstagramIcon className="text-pink-500 m-2 hover:scale-150" />
            <FacebookIcon className="text-blue-600 m-2 hover:scale-150" />
          </div>
          <button
            // className="border py-1 px-3 my-2 border-black text-black text-xs "

            // color=""
            className="bg-cyan-700 text-white flex align-items-center  px-2 py-1 rounded hover:scale-105"
          >
            <FaWhatsapp className="mr-2 text-white" /> Call Now
          </button>
          <a
            className="text-xs text-blue-600 flex items-center space-x-1 my-2"
            href="#"
          >
            <CiGlobe className="mx-2" /> https://xyz.zz.in/
          </a>
        </div>
      </div>
    </Link>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
