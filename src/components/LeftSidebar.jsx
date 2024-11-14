/* eslint-disable react/prop-types */

import {
  ChevronDown,
  Clock,
  Flag,
  Home,
  PlayCircle,
  ShoppingBag,
  Star,
  Users,
  Video,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="fixed ">
      <div className="w-[350px] h-screen py-7 px-3 flex flex-col overflow-y-auto scrollbar-hide">
        <div className="flex items-center space-x-3 mb-6">
          <NavLink to={`/user`}>
            <img
              src="/profilePic.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </NavLink>
          <NavLink to={`/user`}>
          <span className="font-semibold text-gray-900">Mohsin Khan</span>
          </NavLink>
        </div>

        <nav className="space-y-1 flex-grow">
          <SidebarItem
            icon={<Users className="w-7 h-7" />}
            text="Friends"
            badge="(136 online)"
          />
          <SidebarItem icon={<Clock className="w-7 h-7" />} text="Memories" />
          <SidebarItem
            icon={<Flag className="w-7 h-7 text-purple-500" />}
            text="Saved"
          />
          <SidebarItem
            icon={<Users className="w-7 h-7 text-blue-500" />}
            text="Groups"
          />
          <SidebarItem
            icon={<Video className="w-7 h-7 text-blue-500" />}
            text="Video"
          />
          <SidebarItem
            icon={<ShoppingBag className="w-7 h-7 text-blue-500" />}
            text="Marketplace"
          />
          <SidebarItem
            icon={<Home className="w-7 h-7 text-blue-500" />}
            text="Feeds"
          />
          <SidebarItem
            icon={<Star className="w-7 h-7 text-red-500" />}
            text="Events"
          />
          <SidebarItem
            icon={<PlayCircle className="w-7 h-7 text-blue-500" />}
            text="Ads Manager"
          />
          <SidebarItem
            icon={
              <ChevronDown className="w-7 h-7 p-1 bg-gray-300 rounded-full" />
            }
            text="See more"
          />
        </nav>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, badge }) => {
  return (
    <a
      href="#"
      className="flex w-full items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
    >
      {icon}
      <div className="space-x-2">
        <span className="font-semibold text-gray-900 flex-grow">{text}</span>
        {badge && <span className="font-semibold text-gray-900">{badge}</span>}
      </div>
    </a>
  );
};
export default LeftSidebar;
