import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const TeachersList = () => {
  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold">همه معلمها</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-yellow-200" >
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-yellow-200" >
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-yellow-200" >
              <Image src="/plus.png" width={14} height={14} alt="" />
            </button>
          </div>
        </div>
      </div>
        <Pagination/>
    </div>
  );
};

export default TeachersList;
