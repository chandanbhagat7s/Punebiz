import React from "react";
import SubCards from "../SmallComponetns/SubCards";

export default function AdminSub() {
  return (
    <>
      <main className="flex-1">
        <div className="flex flex-col space-y-3 ">
          <div className="cardss p-12">
            <h1 className="text-3xl font-bold text-center mb-10">
              Subscription Plans
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-100">
              <SubCards>
                <div className="flex flex-col lg:flex-row justify-content-around">
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Edit
                  </button>
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Delete
                  </button>
                </div>
              </SubCards>
              <SubCards>
                <div className="flex flex-col lg:flex-row justify-content-around">
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Edit
                  </button>
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Delete
                  </button>
                </div>
              </SubCards>
              <SubCards>
                <div className="flex flex-col lg:flex-row justify-content-around">
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Edit
                  </button>
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Delete
                  </button>
                </div>
              </SubCards>
              <SubCards>
                <div className="flex flex-col lg:flex-row justify-content-around">
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Edit
                  </button>
                  <button className="bg-black text-white w-auto py-2 px-3 rounded">
                    Delete
                  </button>
                </div>
              </SubCards>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
