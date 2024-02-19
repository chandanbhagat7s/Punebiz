import logoImg from "./../assets/logo.png";

import { Button, Link } from "@mui/material";

export default function NavBarr() {
  return (
    <nav className="bg-black px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
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
    </nav>
  );
}
