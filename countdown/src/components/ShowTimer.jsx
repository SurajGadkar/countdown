import React from "react";
import TimerCard from "./TimerCard";

function ShowTimer() {
  return (
    <div className="flex justify-between items-center">
      <TimerCard />
      <TimerCard />
      <TimerCard />
      <TimerCard />
    </div>
  );
}

export default ShowTimer;
