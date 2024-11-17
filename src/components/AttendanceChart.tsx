import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  const data = [
    {
      name: "شنبه",
      حاضر: 40,
      غایب: 24,
    },
    {
      name: "یکشنبه",
      حاضر: 30,
      غایب: 18,
    },
    {
      name: "دوشنبه",
      حاضر: 20,
      غایب: 80,
    },
    {
      name: "سه شنبه",
      حاضر: 80,
      غایب: 39,
    },
    {
      name: "چهارشنبه",
      حاضر: 18,
      غایب: 48,
    },
  ];
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg ">حضور غیاب</h1>
        <Image alt="" src="/moreDark.png" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
          <YAxis axisLine={false}  tick={{fill:'#d1d5db'}} tickLine={false}/>
          <Tooltip />
          <Legend align='right' verticalAlign="top" wrapperStyle={{paddingBlock:'20px'}}/>
          <Bar dataKey="حاضر" fill="#8884d8" legendType='circle' radius={[10,10,0,]} />
          <Bar dataKey="غایب" fill="#82ca9d" legendType='circle' radius={[10,10,0,]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
