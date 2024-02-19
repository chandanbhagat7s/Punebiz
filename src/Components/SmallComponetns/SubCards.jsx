import React from "react";

export default function SubCards({ children }) {
  return (
    <>
      <div
        className="rounded-lg border shadow-sm bg-[#EEE] text-black rounded pb-4"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 bg-black text-white text-center rounded">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
            Golden Plan
          </h3>
        </div>
        <div className="p-6">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>5 Images</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                <line x1="18" x2="12" y1="9" y2="15"></line>
                <line x1="12" x2="18" y1="9" y2="15"></line>
              </svg>
              <span>Lead Generation</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                <line x1="18" x2="12" y1="9" y2="15"></line>
                <line x1="12" x2="18" y1="9" y2="15"></line>
              </svg>
              <span>Trending Page</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                <line x1="18" x2="12" y1="9" y2="15"></line>
                <line x1="12" x2="18" y1="9" y2="15"></line>
              </svg>
              <span>Lorem Ipsum</span>
            </li>
          </ul>
        </div>
        {children || (
          <div className="flex items-center p-6 justify-center">
            <button className="bg-black text-white w-75 py-2 px-3 rounded">
              Subscribe Now
            </button>
          </div>
        )}
      </div>
    </>
  );
}
