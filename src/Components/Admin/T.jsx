import React from "react";
import BasicTable from "./TableB";
import { Button } from "@mui/material";

export default function T() {
  return (
    <>
      <div className="flex-1">
        <div className="bg-[#EEE] text-black text-center py-8">
          <h1>Businesses</h1>
        </div>
        <div className="flex justify-content-evenly p-3">
          <Button className="bg-black text-white">Select Category</Button>
          <Button className="bg-black text-white">Sort</Button>
        </div>
        <BasicTable />
      </div>
    </>
  );
}
