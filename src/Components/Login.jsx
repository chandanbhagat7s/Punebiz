/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JkNRQmB7KRh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button, Input } from "@mui/material";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-75 rounded-lg p-8 shadow-lg bg-[#EEE]">
        <h2 className="text-center text-2xl font-bold">Business Login</h2>
        <div className="mt-4 mb-8 border-b-2 border-black" />
        <form>
          <div className="mb-4 flex flex-col lg:flex-row">
            <label
              className="block text-sm font-medium text-black m-auto basis-1/4"
              htmlFor="username"
            >
              User name / Email Id
            </label>
            <Input
              className=" w-full bg-white px-2 py-1 border-1 border-balck rounded"
              id="username"
              placeholder="User name / Email Id"
              type="text"
            />
          </div>
          <div className="mb-6 flex flex-col lg:flex-row">
            <label
              className="block text-sm font-medium text-black text-center m-auto basis-1/4 "
              htmlFor="password"
            >
              Password
            </label>
            <Input
              className="mt-1 block w-full bg-white px-2 py-1 border-1 border-balck rounded"
              id="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button className="bg-dark text-white">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
