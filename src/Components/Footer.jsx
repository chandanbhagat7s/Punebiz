import { Button, Input } from "@mui/material";

export default function Footer() {
  return (
    <footer className="bg-[#20232a] text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-500">PUNE BIZZ.</h2>
          <p className="text-sm">
            "Welcome to our business hub, your one-stop destination for seamless
            connections in the world of commerce. Explore a diverse marketplace
            where buyers and sellers converge, facilitated by our intuitive
            platform. Whether youre looking for products, services, or
            partnerships, we simplify the journey, connecting businesses
            efficiently. Join our thriving community and unlock a world of
            opportunities. Your success begins here
          </p>
          <p className="text-xs">
            © Copyright reserve to punebizz.com Maintained by
            chordztechnologies.com
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a className="text-sm hover:text-gray-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-300" href="#">
                Businesses
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-300" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-300" href="#">
                Register Your Business
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-gray-300" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <form className="space-y-4 mt-2">
            <Input
              className="w-full bg-white text-black"
              placeholder="Name"
              type="text"
            />
            <Input
              className="w-full bg-white text-black"
              placeholder="Email"
              type="email"
            />
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-xs">Follow us on:</p>
        <div className="flex space-x-4">
          <FacebookIcon className="text-blue-600" />
          <InstagramIcon className="text-pink-600" />
          <LinkedinIcon className="text-blue-700" />
        </div>
      </div>
    </footer>
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
