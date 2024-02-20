import { Button } from "@mui/material";

export default function Cardd() {
  return (
    <div className="bg-white p-8 rounded-lg  flex flex-col items-center space-y-8 mx-3">
      <h2 className="text-3xl font-bold text-center">
        Register Your Business with us & grow your business
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-12 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center space-y-4">
          <SmartphoneIcon className="h-24 w-24" />
          <h3 className="text-xl font-semibold">Step 1</h3>
          <h4 className="text-xl font-semibold">Create Account</h4>
          <p className="text-center">Enter your mobile number to get started</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <InfoIcon className="h-24 w-24" />
          <h3 className="text-xl font-semibold">Step 2</h3>
          <h4 className="text-xl font-semibold">Enter Business Details</h4>
          <p className="text-center">Enter Business Name, Address, Location</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <BoxSelectIcon className="h-24 w-24" />
          <h3 className="text-xl font-semibold">Step 3</h3>
          <h4 className="text-xl font-semibold">Select Categories</h4>
          <p className="text-center">
            Add relevant categories to your free listing page
          </p>
        </div>
      </div>
      <Button className="mt-6">Register Now</Button>
    </div>
  );
}

function BoxSelectIcon(props) {
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
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" />
      <path d="M9 21h1" />
      <path d="M14 3h1" />
      <path d="M14 21h1" />
      <path d="M3 9v1" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M21 14v1" />
    </svg>
  );
}

function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
