import  { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalCarousel = ({ items, renderItem }) => {
  const containerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const updateArrowVisibility = () => {
      const el = containerRef.current;
      if (el) {
        // Check if scroll width is greater than client width (overflow exists)
        setShowArrows(el.scrollWidth > el.clientWidth);
      }
    };

    updateArrowVisibility();

    // Update on resize
    window.addEventListener("resize", updateArrowVisibility);

    return () => {
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, [items]);

  const scrollAmount = 300;

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showArrows && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
          aria-label="Scroll Left"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide py-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item) => (
          <div key={item.key} className="flex-shrink-0 ">
            {renderItem(item)}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showArrows && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
          aria-label="Scroll Right"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default HorizontalCarousel;
