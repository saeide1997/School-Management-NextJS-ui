'use client'
import Image from 'next/image'
import {useState}from 'react'

const FormModal = ({
    table,
    type,
    data,
    id, }:{
        table:'teachers'| 'students' | 'parent'| 'classes' | 'subjects'; type: 'create' | 'update' | 'delete'; data?:any; id?: number }) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-yellow-200"
        : type === "update"
        ? "bg-blue-200"
        : "bg-violet-200";

    const [open, setOpen] = useState(false)

    // const Form =() => {
    //     return (<>
    //         {(type === 'delete' && id ) && (
    //         {console.log(type)}
    //         <form action='' className='p-4 flex flex-col gap-4'>
    //         <span className='text-center font-medium'>همه داده هاپاک خواهند شد. ایا از حذف  {table} اطمینان دارید؟</span>
    //         <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>حذف</button>
    //         </form>)}
    //         {(type === 'update' && id ) && (
    //            <form action="" className='p-4 flex flex-col gap-4'>
    //            <input type="text" name="" id="" />
    //            <input type="text" name="" id="" />
    //        </form>

    //         )}
    //         </>
    //     )
    // }

    return(
        <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={()=> setOpen(true)}>
            <Image src= {`/${type}.png`} alt= '' width={16} height={16}/>
        </button>

        {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            {/* فرم حذف */}
            {type === "delete" && id && (
              <form action="" className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium">
                  همه داده‌ها پاک خواهند شد. آیا از حذف {table} اطمینان دارید؟
                </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
                  حذف
                </button>
              </form>
            )}

            {/* فرم ویرایش */}
            {type === "update" && data.id && (
              <form action="" className=" mt-10 flex justify-between">
                <div className='flex-col flex flex-1 p-4 gap-4'>
                <input
                  type="text"
                  name="name"
                  placeholder="نام"
                  defaultValue={data?.name || ""}
                  className="border p-2 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder=" ایمیل "
                  defaultValue={data?.email || ""}
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="ادرس"
                  defaultValue={data?.address || ""}
                  className="border p-2 rounded-md"
                />
                </div>
                <div className='flex-col flex p-4 flex-1 gap-4  '>
                <input
                  type="text"
                  name="phone"
                  placeholder="تلفن"
                  defaultValue={data?.phone || ""}
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="classes"
                  placeholder=" کلاسها "
                  defaultValue={data?.classes || ""}
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="subjects"
                  placeholder="درسها  "
                  defaultValue={data?.subjects || ""}
                  className="border p-2 rounded-md"
                />

                <button className="bg-blue-700 text-white py-2 px-4 mt-5 flex mr-auto rounded-md border-none w-max self-center">
                  ذخیره تغییرات
                </button>
                </div>
              </form>
            )}
            {/* فرم ایجاد */}
            {type === "create" &&(
              <form action="" className=" mt-10 flex justify-between">
                <div className='flex-col flex flex-1 p-4 gap-4'>
                <input
                  type="text"
                  name="name"
                  placeholder="نام"
                  className="border p-2 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder=" ایمیل "
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="ادرس"
                  className="border p-2 rounded-md"
                />
                </div>
                <div className='flex-col flex p-4 flex-1 gap-4  '>
                <input
                  type="text"
                  name="phone"
                  placeholder="تلفن"
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="classes"
                  placeholder=" کلاسها "
                  className="border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="subjects"
                  placeholder="درسها  "
                  className="border p-2 rounded-md"
                />

                <button className="bg-blue-700 mr-auto text-white py-2 px-4 mt-5 rounded-md border-none w-max flex self-center">
                  ذخیره 
                </button>
                </div>
              </form>
            )}

            {/* دکمه بستن */}
            <div
              className="absolute top-4 left-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Close" width={14} height={14} />
            </div>
          </div>
        </div>
        )}
        </>
    )
}

export default FormModal;