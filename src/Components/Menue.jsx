import { Button } from "@mui/material";
import M2Cards from "../M2Cards";
import Done from "./MCards";

export default function Menue() {
  return (
    <>
      <div className="flex justify-center">
        {/* <aside className="w-60 p-5 border-r">
          <nav>
            <ul>
              <li className="flex items-center justify-between py-1">
                <span>Construction</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Banking</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Automotive</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Electronics</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Grocery</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Cloth Store</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Hospitals</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Hotels</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Medical</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Insurance</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Investment</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Medical</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Tourism</span>
                <PlusIcon className="h-5 w-5" />
              </li>
              <li className="flex items-center justify-between py-1">
                <span>IT Company</span>
                <PlusIcon className="h-5 w-5" />
              </li>
            </ul>
          </nav>
        </aside> */}

        <div className="flex flex-col my-12">
          <M2Cards />
          <M2Cards />
          <M2Cards />
        </div>
      </div>
    </>
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

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
