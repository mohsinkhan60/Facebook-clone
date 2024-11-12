import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Stories = () => {
  const stories = [
    { id: 1, name: "Create story", image: "/profilePic.jpg", isCreate: true },
    {
      id: 2,
      name: "Noor Muhammad",
      image: "/placeholder.svg?height=200&width=150",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Faheem Ashraf",
      image: "/placeholder.svg?height=200&width=150",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Cris Lee",
      image: "/placeholder.svg?height=200&width=150",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      name: "Ali Raza",
      image: "/placeholder.svg?height=200&width=150",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Sana Mir",
      image: "/placeholder.svg?height=200&width=150",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "Nazir Khan",
      image: "/placeholder.svg?height=200&width=150",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
      updateScrollButtons();
    }
  };

  return (
    <div className="flex items-center justify-center md:mr-4">
    <div className="container py-7 px-3 flex flex-col overflow-y-auto max-w-[375px] md:max-w-[672px] mx-auto space-y-4">
      <div className="relative">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-1 top-1/2 z-50 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Stories Section */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex space-x-2 overflow-x-auto scrollbar-hide px-2 sm:px-4"
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative flex-shrink-0 cursor-pointer rounded-xl overflow-hidden transition-transform"
              style={{ width: "120px", height: "220px" }}
            >
              <img
                src={story.image}
                alt={story.name}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              {story.isCreate ? (
                <>
                  <div className="absolute bottom-0 w-full h-[66px] bg-white" />
                  <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2">
                    <div className="bg-white bottom-[37px] left-1/2 z-0 transform -translate-x-1/2 absolute rounded-full p-2">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 z-50 rounded-full p-2">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 w-full text-center text-sm font-semibold">
                    Create story
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-4 left-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full scale-[1.15]" />
                      <img
                        src={story.avatar}
                        alt={`${story.name}'s avatar`}
                        className="relative w-10 h-10 rounded-full border-4 border-white"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-semibold line-clamp-2">
                      {story.name}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Stories;
