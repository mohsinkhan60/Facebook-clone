import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="flex-col flex ">
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <LeftSidebar  />
        <Outlet />
        <RightSidebar />
      </div>
    </div>
  );
};
export default RootLayout;
