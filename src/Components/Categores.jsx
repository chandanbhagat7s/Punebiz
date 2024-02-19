import { Button } from "@mui/material";

import img from "./../assets/home.png";

export default function Categories() {
  return (
    <>
      <div className="bg-white p-4">
        <div className="flex items-center p-2 mx-3 ">
          <div className="text-2xl font-bold mr-4">Categories</div>
          <div className=" w-100 h-0 border border-black"></div>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center ">
              <img
                alt="Milk Dairy"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Milk Dairy</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Grocery"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Grocery</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Medical Store"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Medical Store</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Restaurant"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Restaurant</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Electronics"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Electronics</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Gym"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Gym</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Ice cream"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Ice cream</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Hospital"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Hospital</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Cloths Store"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Cloths Store</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Furnitures"
                className="mb-2"
                height="64"
                src={img}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <span className="text-sm">Furnitures</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <button className="bg-black text-white py-2 px-4 rounded-md">
          View more
        </button>
      </div>
    </>
  );
}
