import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const singleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3 ">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user cart */}
          <div className="bg-blue-100 py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src=""
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4 justify-between">
              <h1 className=" text-xl font-semibold"> سعیده تاجمهر</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora expedita excepturi laudantium nulla sit
              </p>
              <div className="">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={20} height={20} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={20} height={20} />
                  <span> شهریور 1403</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={20} height={20} />
                  <span>saeiide.tm@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={20} height={20} />
                  <span>+989144839748</span>
                </div>
              </div>
            </div>
          </div>
          {/* small carts */}
          <div className="flex gap-4 flex-1 justify-between flex-wrap">
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold ">۴ام</h1>
                <span className="text-sm text-gray-400">کلاس</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold ">20</h1>
                <span className="text-sm text-gray-400">درس</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold ">۷الف</h1>
                <span className="text-sm text-gray-400">کلاس</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-full p-4 h-[800px]">
          <h1>برنامه دانش آموز</h1>
          <BigCalendar />
        </div>
      </div>
      {/* left */}
      <div className="w-full  xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">میانبر ها</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-yellow-200" href="/">
              کلاس دانش آموز
            </Link>
            <Link className="p-3 rounded-md bg-violet-200" href="/">
              دروس دانش آموز
            </Link>
            <Link className="p-3 rounded-md bg-blue-200" href="/">
              معلم دانش آموز
            </Link>
            <Link className="p-3 rounded-md bg-pink-200" href="/">
              امتحانات دانش آموز
            </Link>
          </div>
        </div>
        <Performance/>
        <Announcements />
      </div>
      {/* <div className=""></div> */}
    </div>
  );
};

export default singleStudentPage;
