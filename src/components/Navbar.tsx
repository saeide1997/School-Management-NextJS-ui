import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-6">
        <Image src='/avatar.png' alt='' width={36} height={36} className='rounded-full'/>
        <div className="flex flex-col">
            <span className="text-xs">سعیده تاجمهر</span>
            <span className="text-xs"> ادمین</span>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" width={14} height={14} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="message" width={14} height={14} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white bg-purple-500 rounded-full text-xs'>1</div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="searc" width={14} height={14} />
        <input className='w-[200px] p-2 bg-transparent outline-none' type="text " placeholder="جستجو..." />
      </div>
    </div>
  );
};

export default Navbar;
