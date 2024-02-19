import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Charts() {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["bar A", "bar B", "bar C", "bar D", "bar E", "bar F", "bar G"],
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 7, 8, 9, 8],
        },
      ]}
      width={500}
      height={300}
    />
  );
}
