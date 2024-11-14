
import { ThumbsUp, MessageCircle, Send, Share2, MoreHorizontal } from 'lucide-react'

const UploadPic = () => {
  return (
    <div className="max-w-xl mx-auto bg-white border rounded-xl overflow-hidden">
      {/* Post header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Mohsin Khan"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">Mohsin Khan</h2>
            <p className="text-xs text-gray-500">28 April 2023 · 🌍</p>
          </div>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 rounded-full p-2">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post image */}
      <div className="bg-gray-300">
        <img
          src="/profilePic.jpg"
          alt="Post image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Reactions and comments count */}
      <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500">
        <span>4 comments</span>
      </div>

      {/* Action buttons */}
      <div className="px-4 py-2 border-t border-gray-200">
        <div className="flex justify-between">
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2 rounded-md">
            <ThumbsUp className="w-5 h-5" />
            <span className='hidden md:flex'>Like</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2 rounded-md">
            <MessageCircle className="w-5 h-5" />
            <span className='hidden md:flex'>Comment</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2 rounded-md">
            <Send className="w-5 h-5" />
            <span className='hidden md:flex'>Send</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1 justify-center py-2 rounded-md">
            <Share2 className="w-5 h-5" />
            <span className='hidden md:flex'>Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default UploadPic