import { Image, Smile, Video } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-2xl container mx-auto p-4 space-y-4">
      {/* Status Input Section */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <NavLink to={`/user`}>
          <div className="flex items-center space-x-2">
            <img
              src="/profilePic.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              className="bg-gray-100 rounded-full py-2 px-4 w-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </NavLink>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1">
            <Video className="w-6 h-6 text-red-500" />
            <span className="text-gray-600 hidden md:flex font-medium">Live video</span>
            <span className="text-gray-600 md:hidden flex font-medium">Live</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1">
            <Image className="w-6 h-6 text-green-500" />
            <span className="text-gray-600 hidden md:flex font-medium">Photo/video</span>
            <span className="text-gray-600 md:hidden flex font-medium">Photo/video</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1">
            <Smile className="w-6 h-6 text-yellow-500" />
            <span className="text-gray-600 hidden md:flex font-medium">Feeling/activity</span>
            <span className="text-gray-600 md:hidden flex font-medium">Feeling</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
