import { MoreHorizontal, X, ThumbsUp, MessageCircle, Send, Share2 } from 'lucide-react';

const UploadPic = () => {
  return (
    <div className="max-w-md md:max-w-[635px] mx-auto space-y-4 bg-white rounded-xl shadow-lg">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Kids Library Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm sm:text-base">Kids Library</h2>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <span>1h</span>
              <span className="mx-1">·</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16">
                <g fill="currentColor">
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"/>
                  <path d="M7 7H5.5v4h4V7H8v2.5H7V7z"/>
                  <circle cx="7.5" cy="4.5" r="1"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="bg-red-600 p-4 aspect-square flex items-center justify-center">
        <h1 className="text-white text-center text-xl sm:text-2xl md:text-3xl font-bold px-4">
          What is the full form of AM and PM?
        </h1>
      </div>

      {/* Engagement Metrics */}
      <div className="px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
            <ThumbsUp className="w-3 h-3 text-white" />
          </span>
          <span className="text-gray-500 text-xs sm:text-sm">496</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-500 text-xs sm:text-sm">
          <span>227 comments</span>
          <span>6 shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-2 py-1 my-5 flex flex-row items-center justify-around">
        <button className="flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 mx-1">
          <ThumbsUp className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600 text-xs sm:text-base hidden md:flex">Like</span>
        </button>
        <button className="flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 mx-1">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600 text-xs sm:text-base hidden md:flex">Comment</span>
        </button>
        <button className="flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 mx-1">
          <Send className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600 text-xs sm:text-base hidden md:flex">Send</span>
        </button>
        <button className="flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 mx-1">
          <Share2 className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600 text-xs sm:text-base hidden md:flex">Share</span>
        </button>
      </div>
    </div>
  );
};

export default UploadPic;
