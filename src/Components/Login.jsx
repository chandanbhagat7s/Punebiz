import { Button, Input } from "@mui/material";
import Type from "./Change/Type";

export default function Login() {
  return (
    <div className="w-100 flex items-center justify-center p-4">
      <div className="w-full rounded-lg p-10 rounded bg-gradient-to-r from-white via-blue-100 to-blue-50 my-4 border-y-4 border-sky-700">
        <h2 className="text-center text-2xl font-bold">
          <Type
            text={"Business Login"}
            classs={
              "tracking-wider bg-gradient-to-r from-blue-700 to-black bg-clip-text text-transparent uppercase"
            }
            size={"text-4xl"}
            itteration={1}
          ></Type>
        </h2>
        <div className="mt-4 mb-8 border-b-4 border-blue-700" />
        <div className=" flex align-items-center flex-col lg:flex-row  space-x-4">
          <div className="w-75 lg:w-50">
            <img
              className="rounded-t-lg"
              src="https://o2ronline.com/images/login-img.png"
              alt=""
            />
          </div>
          <div className="w-100 lg:w-50 flex flex-col align-item-center justify-content-center bg-blur-lg lg:mt-0">
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
                <Button className="bg-primary text-white mx-2 px-5 py-2">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
