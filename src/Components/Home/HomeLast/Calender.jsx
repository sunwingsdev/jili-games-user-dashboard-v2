import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const TEXT_COLOR = "text-textYellow";

const getMonthYearString = (date) =>
  date.toLocaleString("default", { month: "long", year: "numeric" });

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const handlePrevMonth = () => {
    const prev = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prev);
  };

  const handleNextMonth = () => {
    const next = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(next);
  };

  const renderCalendarDays = () => {
    const days = [];

    // Empty slots before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded text-sm font-semibold ${TEXT_COLOR}`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-bgSidebar border border-textPrimary p-6 rounded-xl shadow-xl w-fit   text-center">
      {/* Heading */}
      <h2 className="text-textYellow text-xl font-bold   mb-4">
        Calendar Report
      </h2>

      {/* Month Switcher */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button onClick={handlePrevMonth} className={`${TEXT_COLOR}`}>
          <FaChevronLeft />
        </button>
        <span className={`text-lg font-semibold ${TEXT_COLOR}`}>
          {getMonthYearString(currentDate).split(" ")[0]}
        </span>
        <button onClick={handleNextMonth} className={`${TEXT_COLOR}`}>
          <FaChevronRight />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((day, i) => (
          <div
            key={i}
            className={`text-xs font-bold ${TEXT_COLOR} flex items-center justify-center`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
