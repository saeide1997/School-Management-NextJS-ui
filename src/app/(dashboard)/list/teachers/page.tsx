import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  address: string;
  subjects: string[];
  classes: string[];
};

const columns = [
  { header: "اطلاعات", accessor: "info" },
  {
    header: "شناسه معلم",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  { header: "درسها ", accessor: "subjects", className: "hidden md:table-cell" },
  { header: "کلاسها ", accessor: "classes", className: "hidden md:table-cell" },
  { header: "تلفن ", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "آدرس ", accessor: "addredd", className: "hidden lg:table-cell" },
  { header: "عملیات ", accessor: "actions", className: "hidden md:table-cell" },
];

const TeachersList = () => {
  const renderRow = (item: Teacher) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 test-sm hover:bg-violet-100">
      <td className="flex items-center gap-4 p-4 ">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col ">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={"/list/teachers"}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role == "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-violet-100">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold">همه معلمها</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-yellow-200">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-yellow-200">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === 'admin' && (
            <button className="w-8 h-8 flex cursor-pointer items-center justify-center rounded-full bg-yellow-200">
              <Image src="/plus.png" width={14} height={14} alt="" />
            </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      <Pagination />
    </div>
  );
};

export default TeachersList;