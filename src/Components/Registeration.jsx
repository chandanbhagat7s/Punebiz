/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f0adFPeK2ND
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button, Input, TextareaAutosize } from "@mui/material";
import { CiInstagram } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Reg() {
  return (
    <div className="max-w-4xl mx-auto p-12 border rounded bg-[#EEE]">
      <h1 className="text-3xl font-bold text-center mb-12">
        Business Registration Form
      </h1>
      <div className="border-t-2 border-black p-2 mb-12">
        <form className="space-y-4">
          <div className="flex flex-col items-center lg:flex-row p-2 w-100 mt-12">
            <div className="lg:w-48">Owner Name</div>
            <Input placeholder="Owner Name" className="w-96 lg:w-full " />
          </div>
          <div className="flex flex-col items-center lg:flex-row p-2 w-100 mt-12 ">
            <div className="lg:w-48">Business Name</div>
            <Input placeholder="Business Name" className="w-96 lg:w-full" />
          </div>
          <div className="flex flex-col items-center lg:flex-row p-2 w-100 mt-12 ">
            <div className="lg:w-48 ">Email</div>
            <Input
              placeholder="Email"
              type="email"
              className="w-96 lg:w-full"
            />
          </div>
          <div className="flex flex-col items-center lg:flex-row p-2 w-100 mt-12 ">
            <div className="lg:w-48 ">Whatsapp Number</div>
            <Input placeholder="Whatsapp Number" className="w-96 lg:w-full" />
          </div>
          <div className="flex flex-col items-center lg:flex-row p-2 w-100 mt-12 ">
            <div className="lg:w-48">Address</div>
            <Input placeholder="Address" className="w-96 lg:w-full" />
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-row justify-content-around my-2">
              <div>City</div>
              <div>
                <select className="form-select">
                  <option selected> select city</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-content-around my-2">
              <div>Business Category</div>
              <div>
                <select className="form-select">
                  <option selected>Business Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-content-around my-2">
              <div>Business sub Category</div>
              <div>
                <select className="form-select">
                  <option selected>select Business sub Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-content-around align-items-center flex-col lg:flex-row ">
            <div className="flex justify-content-around align-items-center">
              <div className="mb-2">
                <Input type="file" placeholder="Upload Photo/Videos" />
              </div>
              <Button variant="outline" className="bg-dark text-white mx-2">
                Upload
              </Button>
            </div>
            <div className="flex justify-content-around align-items-center my-4">
              <div className="mb-2 flex">
                <Input type="file" placeholder="Upload Photo/Videos" />
              </div>
              <Button variant="outline" className="bg-dark text-white mx-2">
                Upload
              </Button>
              <div className="text-sm text-gray-500">max. 5 images/videos</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-content-around">
              <LinkedinIcon /> <Input placeholder="LinkedIn Profile" />
            </div>
            <div className="flex justify-content-around">
              <TwitterIcon /> <Input placeholder="Twitter Profile" />
            </div>
            <div className="flex justify-content-around">
              <FaInstagram /> <Input placeholder="Instagram Profile" />
            </div>
            <div className="flex justify-content-around">
              <FacebookIcon /> <Input placeholder="Facebook Profile" />
            </div>
          </div>
          <div className="flex justify-content-around">
            <TextareaAutosize
              cols={40}
              minRows={5}
              placeholder="Enter Description"
              className="border-2 border-black text-center"
            />
          </div>

          <div className="flex justify-content-center my-4">
            <Button variant="outline" className="bg-dark text-white mx-2 ">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
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
