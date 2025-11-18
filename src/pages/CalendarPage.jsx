import React, { useState } from "react";
import Calendar from "../components/Calendar";
import "../styles/CalendarPage.css";

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const totalAmount = events
    .filter(
      (e) =>
        e.date.getMonth() === month && e.date.getFullYear() === year
    )
    .reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="calendar-page">
      <div className="calendar-header-top">
        <button onClick={handlePrevMonth}>◀</button>
        <h1>{year}년 {month + 1}월</h1>
        <button onClick={handleNextMonth}>▶</button>
        <div className="month-total">총 지출: {totalAmount}원</div>
      </div>
      <Calendar events={events} setEvents={setEvents} currentDate={currentDate} />
    </div>
  );
}
