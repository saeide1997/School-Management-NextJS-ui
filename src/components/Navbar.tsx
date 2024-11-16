import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="searc" width={14} height={14} />
        <input type="text " placeholder="جستجو..." />
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" width={14} height={14} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
          <Image src={"/announcement.png"} alt="message" width={14} height={14} />
        </div>
        <div className="flex flex-col">
            <span className="text-xs">سعیده تاجمهر</span>
            <span className="text-xs"> ادمین</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
