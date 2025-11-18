import React from "react";
import "../styles/EventList.css";

export default function EventList({ events }) {
  return (
    <ul className="event-list">
      {events.map((e, idx) => (
        <li key={idx}>{e.title} {e.amount && `(${e.amount}원)`}</li>
      ))}
    </ul>
  );
}
