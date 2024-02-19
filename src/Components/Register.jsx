import { Button } from "@mui/material";
import img from "./../assets/step1.png";

export default function Register() {
  return (
    <div className="flex flex-col py-5 px-12 lg:justify-content-center align-items-center">
      <div className="flex p-4 flex-col lg:flex-row lg:h-96 lg:w-[80vw] ">
        <div className="lg:w-50 w-full p-3 ">
          <img
            alt="Vision"
            className="h-100 w-full rounded bg-contain "
            src={img}
          />
        </div>
        <div className="w-full lg:w-50 flex flex-col justify-content-center align-items-center">
          <div className="p-4 flex flex-col justify-center items-center lg:w-[50%]">
            <div>
              <h2 className="text-2xl font-bold align-self-start">Step 1</h2>
              <h2 className="text-2xl font-bold align-self-start">
                Create Account
              </h2>
              <p className="text-base align-self-start">
                Enter Your mobile number to
              </p>
              <p className="text-base align-self-start">get started</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-4 flex-col lg:flex-row-reverse lg:h-96 lg:w-[80vw] lg:mt-[-10vh] ">
        <div className="lg:w-50 w-full p-3 lg:mt-[-10vh]">
          <img
            alt="Vision"
            className="h-100 w-full rounded bg-contain m-auto"
            src={img}
          />
        </div>
        <div className="w-full lg:w-50 flex flex-col justify-content-center align-items-center">
          <div className="p-4 flex flex-col justify-center items-center lg:w-[50%]">
            <div>
              <h2 className="text-2xl font-bold align-self-start">Step 1</h2>
              <h2 className="text-2xl font-bold align-self-start">
                Create Account
              </h2>
              <p className="text-base align-self-start">
                Enter Your mobile number to
              </p>
              <p className="text-base align-self-start">get started</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-4 flex-col lg:flex-row lg:h-96 lg:w-[80vw] lg:mt-[-10vh]">
        <div className="lg:w-50 w-full p-3 lg:mt-[-10vh]">
          <img
            alt="Vision"
            className="h-100 w-full rounded bg-contain m-auto "
            src={img}
          />
        </div>
        <div className="w-full lg:w-50 flex flex-col justify-content-center align-items-center">
          <div className="p-4 flex flex-col justify-center items-center lg:w-[50%]">
            <div>
              <h2 className="text-2xl font-bold align-self-start">Step 1</h2>
              <h2 className="text-2xl font-bold align-self-start">
                Create Account
              </h2>
              <p className="text-base align-self-start">
                Enter Your mobile number to
              </p>
              <p className="text-base align-self-start">get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
