/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  X,
  Image,
  Users,
  Smile,
  MapPin,
  Gift,
  MoreHorizontal,
  Plus,
} from "lucide-react";

const Createpost = ({ setIsModel, isModel }) => {
  const [postText, setPostText] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  if (!isModel) return null;

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      console.log("Dropped files:", files);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      console.log("Selected files:", files);
    }
  };

  return (
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

        {/* File Upload */}
        {isOpen === true ? (
          <div
            className={`flex relative flex-col items-center justify-center border m-2 p-12 space-y-4 transition-colors rounded-lg ${
              isDragging ? "bg-gray-50" : "bg-white"
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {" "}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileSelect}
              />
              <div className="rounded-full bg-gray-100 p-3">
                <Plus className="h-6 w-6 text-gray-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-1">Add photos/videos</h3>
              <p className="text-sm text-gray-500">or drag and drop</p>
            </div>
          </div>
        ) : (
          <div className="pb-4">
            <textarea
              placeholder="What's on your mind, Mohsin?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full min-h-[100px] text-lg resize-none border-none focus:ring-0 focus:outline-none"
            />
          </div>
        )}

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
                <Image
                  onClick={() => setIsOpen(true)}
                  className="w-6 h-6 text-green-500"
                />
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
  );
};

export default Createpost;
