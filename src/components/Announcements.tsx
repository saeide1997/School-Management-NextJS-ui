// import prisma from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";

const Announcements = () => {
  //   const { userId, sessionClaims } = auth();
  //   const role = (sessionClaims?.metadata as { role?: string })?.role;

  //   const roleConditions = {
  //     teacher: { lessons: { some: { teacherId: userId! } } },
  //     student: { students: { some: { id: userId! } } },
  //     parent: { students: { some: { parentId: userId! } } },
  //   };

  //   const data = await prisma.announcement.findMany({
  //     take: 3,
  //     orderBy: { date: "desc" },
  //     where: {
  //       ...(role !== "admin" && {
  //         OR: [
  //           { classId: null },
  //           { class: roleConditions[role as keyof typeof roleConditions] || {} },
  //         ],
  //       }),
  //     },
  //   });

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">اخبار</h1>
        <span className="text-xs text-gray-400">مشاهده همه</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-blue-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit!</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">1402/12/12</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit..</p>
        </div>

        <div className="bg-violet-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum, dolor sit amet consectetur ?</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">1403/01/13</span>
          </div>
          <p className="text-sm text-gray-400 mt-1"></p>
        </div>

        <div className="bg-yellow-100 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">1403/02/12</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consecteturo.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
