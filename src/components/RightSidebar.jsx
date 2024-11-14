import { Gift, MoreHorizontal, Search } from "lucide-react"
import { contacts } from "../../DummyData"

const RightSidebar = () => {


  return (
    <div className="fixed">
    <div className="w-full max-w-xs bg-transparent h-screen flex flex-col overflow-y-auto scrollbar-hide">
      {/* Birthdays Section */}
      <div className="p-4 border-b">
        <p className="text-gray-500 text-lg font-semibold py-2">Birthdays</p>
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Gift className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-md">
              <span className="font-semibold">Raja Ahmed</span> and{" "}
              <span className="font-semibold">6 others</span> have their birthdays
              today.
            </p>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="p-2">
        <div className="flex items-center justify-between px-2 py-1">
          <h2 className="text-gray-500 text-lg font-semibold">Contacts</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="mt-2 space-y-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={`/profilePic.jpg`}
                  alt={contact.name}
                  className="w-9 h-9 rounded-full"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>
              <span className="ml-3 text-sm font-medium">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default RightSidebar