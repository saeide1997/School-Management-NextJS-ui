
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart';
import EvantCalander from "@/components/EventCalander";
import Announcements from "@/components/Announcements";

const AdminPage = () => {
  return (
    <div className=" p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="دانش‌آموزان" />
          <UserCard type="‌معلم‌ها" />
          <UserCard type="والدین" />
          <UserCard type="کارکنان" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart/>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/3">
        <EvantCalander/>
        <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;
