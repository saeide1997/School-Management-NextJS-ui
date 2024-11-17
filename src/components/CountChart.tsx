"use client";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CountChart = () => {
  const data = [
    {
      name: "مجموع",
      count: 100,
      fill: "white",
    },
    {
      name: "دخترها",
      count: 45,
      fill: "#8884d8",
    },
    {
      name: "پسرها",
      count: 55,
      fill: "#83a6ed",
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg ">دانش آموزان</h1>
        <Imaage src="/moreDark.png" alt="" />
      </div>
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
            //   label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue-100 rounded-full">
            <h1>1,234</h1>
            <h2 className="text-sm text-gray-300">پسرها (۵۵٪)</h2>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow-100 rounded-full">
            <h1>1,234</h1>
            <h2 className="text-sm text-gray-300">دخترها (4۵٪)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
