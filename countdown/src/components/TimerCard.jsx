import React from "react";

function TimerCard({ time, title }) {
  return (
    <div className="border-2 border-purple-200 h-[56px] w-[56px] md:h-[96px] md:w-[96px] m-2 flex flex-col items-center justify-center">
      <div className="text-sm md:text-2xl text-white ">{time}</div>
      <div className="text-sm md:text-xl text-white">{title}</div>
    </div>
  );
}

export default TimerCard;
