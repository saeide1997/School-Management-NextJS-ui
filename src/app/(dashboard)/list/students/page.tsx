import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  address: string;
  grade: number;
  class: string;
};

const columns = [
  { header: "اطلاعات", accessor: "info" },
  {
    header: "شناسه دانش‌آموز",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  { header: "پایه ", accessor: "grade", className: "hidden md:table-cell" },
  { header: "تلفن ", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "آدرس ", accessor: "addredd", className: "hidden lg:table-cell" },
  { header: "عملیات ", accessor: "actions", className: "hidden md:table-cell" },
];

const StudentsList = () => {
  const renderRow = (item: Student) => (
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
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={"/list/teachers"}>
          <FormModal  table="students" type="edit" data={item}/>
          </Link>
          {role == "admin" && (
            <FormModal  table="students" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 flex-1 m-4 mt-0">
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold">همه دانش‌آموزان</h1>
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
            <FormModal  table="students" type="create"/>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={studentsData}/>
      <Pagination />
    </div>
  );
};

export default StudentsList;