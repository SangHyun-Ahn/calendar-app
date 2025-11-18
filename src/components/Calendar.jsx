import React, { useState } from "react";
import EventModal from "./EventModal";
import EventList from "./EventList";
import "../styles/Calendar.css";

export default function Calendar({ events, setEvents, currentDate }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const daysArray = [];
  for (let i = 0; i < firstDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  const handleDayClick = (day) => {
    if (!day) return;
    setSelectedDate(new Date(year, month, day));
    setShowModal(true);
  };

  return (
    <div className="calendar">
      {["일","월","화","수","목","금","토"].map((d) => (
        <div key={d} className="calendar-header">{d}</div>
      ))}

      {daysArray.map((day, idx) => {
        const dayEvents = events.filter(
          (e) =>
            e.date.getDate() === day &&
            e.date.getMonth() === month &&
            e.date.getFullYear() === year
        );
        return (
          <div
            key={idx}
            className={`calendar-day ${!day ? "empty" : ""}`}
            onClick={() => handleDayClick(day)}
          >
            {day && <div className="day-number">{day}</div>}
            {day && <EventList events={dayEvents} />}
          </div>
        );
      })}

      {showModal && (
        <EventModal
          date={selectedDate}
          setShowModal={setShowModal}
          events={events}
          setEvents={setEvents}
        />
      )}
    </div>
  );
}
