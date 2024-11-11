'use client'

import { Home, Menu, Search } from "lucide-react";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { SlFlag } from "react-icons/sl";



const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home')
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="flex items-center justify-between h-14 px-2 mx-auto max-w-screen-2xl md:px-4">
        {/* Left section */}
        <div className="flex items-center flex-1 gap-2">
          <a href="/" className="shrink-0">
            <img src="/facebook.png" className="w-8 h-8 sm:w-10 sm:h-10" alt="" />

          </a>
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4  text-[#65686C]" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-56 pl-9 pr-3 py-2 bg-[#F0F2F5] rounded-full outline-none lg:w-60"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Middle section - Main navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 items-center hidden md:flex md:space-x-20">
          <button
            onClick={() => setActiveTab('home')}
            className={`p-2 hover:bg-gray-100 rounded-lg relative ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-700'}`}
          >
            <Home className="w-6 h-6 md:w-7 md:h-7" />
            {activeTab === 'home' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('marketplace')}
            className={`p-2 hover:bg-gray-100 rounded-lg relative ${activeTab === 'marketplace' ? 'text-blue-500' : 'text-gray-700'}`}
          >
            <SlFlag className="w-6 h-6 md:w-7 md:h-7" />
            {activeTab === 'marketplace' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`p-2 hover:bg-gray-100 rounded-lg relative ${activeTab === 'video' ? 'text-blue-500' : 'text-gray-700'}`}
          >
            <MdOutlineOndemandVideo className="w-6 h-6 md:w-7 md:h-7" />
            {activeTab === 'video' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('shop')}
            className={`p-2 hover:bg-gray-100 rounded-lg relative ${activeTab === 'shop' ? 'text-blue-500' : 'text-gray-700'}`}
          >
            <LuShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
            {activeTab === 'shop' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`p-2 hover:bg-gray-100 rounded-lg relative ${activeTab === 'groups' ? 'text-blue-500' : 'text-gray-700'}`}
          >
            <HiUserGroup className="w-6 h-6 md:w-7 md:h-7" />
            {activeTab === 'groups' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-end flex-1 space-x-2">
          <button className="p-2 bg-gray-300 hover:bg-gray-200 rounded-full relative">
            <CgMenuGridR className="w-6 h-6" />
          </button>
          <button className="p-2 bg-gray-300 hover:bg-gray-200 rounded-full relative">
            <FaFacebookMessenger className="w-6 h-6" />
          </button>
          <button className="p-2 bg-gray-300 hover:bg-gray-200 rounded-full relative">
            <IoNotifications className="w-6 h-6" />
            <span className="absolute -top-2 -right-4 flex items-center justify-center w-8 h-5 text-xs text-white bg-[#DD2334] rounded-full">
              20+
            </span>
          </button>
          <button className="p-1 rounded-full">
            <img
              src="/profilePic.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar