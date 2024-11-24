"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  { id: 1, title: "جلسه اولیه مربیان", time: "12:00 - 14:00", description: "جلسه اولیه مربیان در سالن اجتماعات" },
  { id: 2, title: "جشن شب یلدا", time: "12:00 - 14:00", description: "جشن شب یلدا با هزینه ۱۰۰۰۰۰۰تومان برای هر دانش‌آموز" },
  { id: 3, title: "امتحان پایان ترم", time: "12:00 - 14:00", description: "امتحان پایان ترم در اواسط دی ماه" },
];

const EvantCalander = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="hebrew"
        locale="fa-FA"
        className='shabnamBold'
      />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>رویدادها</h1>
        <Image src='/moreDark.png ' alt='' width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event)=>(
            <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-200 even:border-t-violet-200' key={event.id}>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-700'>{event.title}</h1>
                    <span className='text-gray-500 text-xs'>{event.time}</span>
                </div>
                <div>
                    <p className='mt-2 text-gray-600 text-xs'>{event.description}</p>
                </div>
            </div>

        ))}
      </div>
    </div>
  );
};

export default EvantCalander;
