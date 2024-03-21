import React from "react";

function TimerCard({ time }) {
  return (
    <div className="border-2 border-white h-[96px] w-[96px] m-2">{time}</div>
  );
}

export default TimerCard;
