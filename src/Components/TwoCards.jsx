import React from "react";

import c1 from "./../assets/c1.png";

import c2 from "./../assets/c2.png";

export default function TwoCards() {
  return (
    <>
      <div className="container mx-auto  my-2">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="bg-white rounded-lg shadow-md p-2 w-full lg:w-1/2">
            <img className="rounded" src={c1} alt="" />
          </div>
          <div className="bg-white rounded-lg shadow-md p-2 w-full lg:w-1/2">
            <img className="rounded" src={c2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
