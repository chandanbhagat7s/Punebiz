import React from "react";
import SubCards from "./SmallComponetns/SubCards";

export default function Subscription({ children }) {
  return (
    <>
      <div className="bg-white p-8 w-[75vw] m-auto ">
        <h1 className="text-3xl font-bold text-center mb-10">
          Subscription Plans
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <SubCards />
          <SubCards />
          <SubCards />
          <SubCards />
        </div>
      </div>
    </>
  );
}
