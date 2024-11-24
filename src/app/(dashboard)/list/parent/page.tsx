'use client'
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
// import prisma from "@/lib/prisma";
// import { ITEM_PER_PAGE } from "@/lib/settings";
// import { Parent, Prisma, Student } from "@prisma/client";
import Image from "next/image";

// import { auth } from "@clerk/nextjs/server";
import { parentsData, role } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import {useState, useEffect} from 'react'
import {RiseLoader} from "react-spinners";

// type ParentList = Parent & { students: Student[] };

const ParentListPage = ()=>{
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, []);
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | undefined };
// }) => {

// const { sessionClaims } = auth();
// const role = (sessionClaims?.metadata as { role?: string })?.role;
type ParentList = {
  id: number;
  // teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  address: string;
  students: string[];
};

const columns = [
  {
    header: "اطلاعات",
    accessor: "info",
  },
  {
    header: "نام دانش‌آموزان",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "تلفن",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "آدرس",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  ...(role === "admin"
    ? [
        {
          header: "عملیات",
          accessor: "action",
        },
      ]
    : []),
];

const renderRow = (item: ParentList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violet-100"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">
      {item.students.join(",")}
    </td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
      <Link href={"/list/teachers"}>
      <FormModal  table="parent" type="delete" data={item}/>
          </Link>
          {role == "admin" && (
            <FormModal  table="parent" type="delete" id={item.id}/>
          )}
      </div>
    </td>
  </tr>
);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {loading?<div className=' w-full h-svh justify-center items-center flex'>
            <RiseLoader

            color={'#6ac0ff'}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div>:
         
      <>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">تمام والدین</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal  table="parent" type="create"/>}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <Pagination />
      </>}
    </div>
  );
};

export default ParentListPage;