import React, { useState } from "react";
import "../styles/EventModal.css";

export default function EventModal({ date, setShowModal, events, setEvents }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  if (!date) return null;

  const handleSave = () => {
    const newEvent = { title, amount, date };
    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</h2>
        <input
          type="text"
          placeholder="일정 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>저장</button>
          <button onClick={() => setShowModal(false)}>취소</button>
        </div>
      </div>
    </div>
  );
}
