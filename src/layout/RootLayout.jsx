import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="flex-col flex ">
      <div className="fixed z-50">
        <Navbar />
      </div>
      <div className="flex mt-[57px] bg-[#F2F4F7]  overflow-auto touch-none">
        <div className="flex-[.4] hidden md:flex">
          <LeftSidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-[.4] hidden md:flex">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};
export default RootLayout;
