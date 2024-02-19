import { Button, Input } from "@mui/material";
import React from "react";

export default function CreateUser() {
  return (
    <>
      <main className="flex-1">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-75 rounded-lg p-8 shadow-lg bg-[#EEE]">
            <h2 className="text-center text-2xl font-bold">Create User</h2>
            <div className="mt-4 mb-8 border-b-2 border-black" />
            <form>
              <div className="flex flex-col items-center lg:flex-row p-2 w-full mt-12">
                <div className="lg:basis-1/4">Owner Name</div>
                <Input
                  placeholder="Owner Name"
                  className="w-100 lg:w-75 bg-white rounded border-black border-1 px-2 py-1 "
                />
              </div>

              <div className="mb-6 flex lg:flex-row flex-col items-center">
                <label
                  className="block text-sm font-medium text-black w-50 text-center"
                  htmlFor="username"
                >
                  User name / Email Id
                </label>
                <Input
                  className="mt-1 w-full"
                  id="username"
                  placeholder="User name / Email Id"
                  type="text"
                />
              </div>
              <div className="mb-6 flex lg:flex-row flex-col items-center">
                <label
                  className="block text-sm font-medium text-black text-center w-50"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  className="mt-1 block w-full"
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="mb-6 flex lg:flex-row flex-col items-center">
                <label
                  className="block text-sm font-medium text-black text-center w-50"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <Input
                  className="mt-1 block w-full"
                  id="password"
                  placeholder="Confirm Password"
                  type="password"
                />
              </div>
              <div className="mb-6 flex lg:flex-row flex-col items-center ">
                <label
                  className="block text-sm font-medium text-black text-center w-25"
                  htmlFor="password"
                >
                  Select City
                </label>
                <div className="w-25 flex justify-center">
                  <select
                    // className="mt-1 block lg:mr-6 p-2 rounded "
                    id="password"
                    placeholder="Password"
                    type="password"
                  >
                    <option value="">City</option>
                    <option value="">a</option>
                    <option value="">a</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button className="bg-dark text-white">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
