/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Createpost.jsx

import { useState } from 'react';
import { X, Image, Users, Smile, MapPin, Gift, MoreHorizontal } from 'lucide-react';

const Createpost = ({ setIsModel, isModel }) => {
  const [postText, setPostText] = useState('');

  if (!isModel) return null;

  return (
   <div >
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative p-4">
        {/* Header */}
        <div className="border-b pb-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Create post</h1>
          <button
            onClick={() => setIsModel(false)}
            className="text-gray-500 hover:bg-gray-200 p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="py-4 flex items-center space-x-2">
          <img
            src="/profilePic.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Mohsin Khan</p>
            <button className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md text-sm">
              <Users className="w-4 h-4" />
              <span>Friends</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Post Input */}
        <div className="pb-4">
          <textarea
            placeholder="What's on your mind, Mohsin?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-full min-h-[100px] text-lg resize-none border-none focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Background Selector */}
        <div className="flex items-center space-x-2 mb-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
            <span className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Aa
            </span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
            <Smile className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Add to Post */}
        <div className="border-t pt-3 pb-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Add to your post</span>
            <div className="flex space-x-1">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Image className="w-6 h-6 text-green-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Users className="w-6 h-6 text-blue-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Smile className="w-6 h-6 text-yellow-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MapPin className="w-6 h-6 text-red-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Gift className="w-6 h-6 text-teal-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Post Button */}
        <div className="pb-2">
          <button
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!postText.trim()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Createpost;
