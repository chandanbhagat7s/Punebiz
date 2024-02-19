import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import Charts from "./Chart";

export default function AdminMain() {
  return (
    <>
      <main className="flex-1">
        <h1 className="text-4xl font-bold mb-8 bg-[#EEE] lg:py-24 lg:pl-12 ">
          Welcome to Pune Bizz Admin Panel
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-2 lg:justify-around ">
          <div className="border-2 border-black bg-[#EEE] rounded p-3 flex flex-col space-y-2 align-items-center md:w-50">
            <div className="">
              <FaBuildingColumns className="lg:text-7xl text-3xl" />
            </div>
            <div className="text-2xl font-bold">Total Businessess</div>
            <div className="text-2xl font-extrabold">1000</div>
          </div>
          <div className="border-2 border-black bg-[#EEE] rounded p-3 flex flex-col space-y-2 align-items-center">
            <div className="">
              <FaBuildingColumns className="lg:text-7xl text-3xl" />
            </div>
            <div className="text-2xl font-bold">Total Businessess</div>
            <div className="text-2xl font-extrabold">1000</div>
          </div>
          <div className="border-2 border-black bg-[#EEE] rounded p-3 flex flex-col space-y-2 align-items-center">
            <div className="">
              <FaBuildingColumns className="lg:text-7xl text-3xl" />
            </div>
            <div className="text-2xl font-bold">Total Businessess</div>
            <div className="text-2xl font-extrabold">1000</div>
          </div>
        </div>
        <div className="p-8 flex flex-col align-items-center ">
          <div>
            <h2 className="text-2xl font-semibold mb-4 ">Favourite Colour</h2>
          </div>
          <Charts />
        </div>
      </main>
    </>
  );
}
