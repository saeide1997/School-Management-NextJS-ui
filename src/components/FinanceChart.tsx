'use client'
import Image from "next/image";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
const FinanceChart = () => {
    const data = [
        {
          name: "فروردین",
          درآمد: 4000,
          مخارج: 2400,
        },
        {
          name: "اردیبهشت",
          درآمد: 3000,
          مخارج: 1398,
        },
        {
          name: "خرداد",
          درآمد: 2000,
          مخارج: 9800,
        },
        {
          name: "تیر",
          درآمد: 2780,
          مخارج: 3908,
        },
        {
          name: "مرداد",
          درآمد: 1890,
          مخارج: 4800,
        },
    ]
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg ">مالی </h1>
        <Image alt="" src="/moreDark.png" width={20} height={20} />
      </div>
      <ResponsiveContainer width={"100%"} height={'90%'}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
        <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={10} padding={{ left: 30, right: 30 }} />
        <YAxis axisLine={false}  tick={{fill:'#d1d5db'}} tickLine={false} tickMargin={20}/>
        <Tooltip />
        <Legend align='center' verticalAlign="top" wrapperStyle={{paddingBlock:'10px'}}/>
        <Line
          type="monotone"
          dataKey="مخارج"
          stroke="#C3EBFA"
          strokeWidth={5}
        />
        <Line type="monotone" dataKey="درآمد" stroke="#CFCEFF" strokeWidth={5} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
