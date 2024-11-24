'use client'
// import FormContainer from "@/components/FormContainer";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
// import prisma from "@/lib/prisma";
// import { ITEM_PER_PAGE } from "@/lib/settings";
// import { Prisma, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
// import { auth } from "@clerk/nextjs/server";
import { role, subjectsData } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import {useState, useEffect} from 'react'
import {RiseLoader} from "react-spinners";

// type SubjectList = Subject & { teachers: Teacher[] };

const SubjectListPage = ()=> {
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
//   const { sessionClaims } = auth();
//   const role = (sessionClaims?.metadata as { role?: string })?.role;
type SubjectList = {
  id: number;
  name: string;
  teachers: string[];
};
  const columns = [
    {
      header: "نام درس",
      accessor: "name",
    },
    {
      header: "معلم‌ها",
      accessor: "teachers",
      className: "hidden md:table-cell",
    },
    {
      header: "عملیات",
      accessor: "action",
    },
  ];

  const renderRow = (item: SubjectList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-violet-100"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">
        {item.teachers.join(",")}
      </td>
      <td>
        <div className="flex items-center gap-2">
        <Link href={"/list/teachers"}>
        <FormModal  table="subjects" type="update" data={item}/>
          </Link>
          {role == "admin" && (
            <FormModal  table="subjects" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );

  // const { page, ...queryParams } = searchParams;

  // const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

  // const query: Prisma.SubjectWhereInput = {};

  // if (queryParams) {
  //   for (const [key, value] of Object.entries(queryParams)) {
  //     if (value !== undefined) {
  //       switch (key) {
  //         case "search":
  //           query.name = { contains: value, mode: "insensitive" };
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  // }

  // const [data, count] = await prisma.$transaction([
  //   prisma.subject.findMany({
  //     where: query,
  //     include: {
  //       teachers: true,
  //     },
  //     take: ITEM_PER_PAGE,
  //     skip: ITEM_PER_PAGE * (p - 1),
  //   }),
  //   prisma.subject.count({ where: query }),
  // ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {loading?<div className=' w-full h-svh justify-center items-center flex'>
            <RiseLoader

            color={'#a600ff'}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div>:
         
      <>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">تمام درس‌ها</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="subjects" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* PAGINATION */}
      <Pagination />
      </>}
    </div>
  );
};

export default SubjectListPage;