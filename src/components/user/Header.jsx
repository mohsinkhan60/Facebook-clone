
import { Camera, ChevronDown, MoreHorizontal } from 'lucide-react'

const Header = () => {

  return (
    <div className="w-full md:mt-[55px] mt-[55px] bg-white">
      <div className="max-w-6xl mx-auto">
                 {/* Cover Photo */}
        <div className="relative h-[30rem] bg-gray-300 rounded-b-lg overflow-hidden">
          <img
            src="/background.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 right-4 flex items-center px-4 py-2 bg-white rounded-md shadow">
            <Camera className="w-5 h-5 mr-2" />
            <span className="font-semibold">Edit cover photo</span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:-mt-16 sm:space-x-5">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/profilePic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:flex-grow">
              <h1 className="text-3xl font-bold">Mohsin Khan</h1>
              <p className="text-gray-600">3.9K friends</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                Add to story
              </button>
              <button className="px-4 py-2 bg-gray-200 text-black font-semibold rounded-md hover:bg-gray-300">
                Edit profile
              </button>
              <button className="p-2 bg-gray-200 text-black rounded-md hover:bg-gray-300">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 border-t border-gray-300">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-600">
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active" aria-current="page">
                Posts
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100">
                About
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100">
                Friends
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100">
                Photos
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100">
                Videos
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100">
                Reels
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100">
                More
                <ChevronDown className="inline-block w-4 h-4 ml-1" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Header