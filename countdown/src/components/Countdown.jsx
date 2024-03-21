import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import TimerCard from "./TimerCard";

function Countdown() {
  const [countdown, setCountdown] = useState(null);
  const [selected, setSelected] = useState(null);
  const [total, setTotal] = useState(null);

  const handleStartTimer = () => {
    calculate();
  };

  const updateCountdown = () => {
    const difference = new Date(selected) - new Date();
    if (difference <= 0) {
      clearInterval(timer);
    } else {
      let seconds = Math.floor(difference / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      setCountdown({ days, hours, minutes, seconds });
    }
  };

  const calculate = () => {
    const current = new Date();
    const difference = selected?.getTime() - current.getTime();

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    setTotal(seconds);
    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, [total]);

  console.log(countdown);

  return (
    <div>
      <DateTimePicker onChange={setSelected} value={selected} />

      <button onClick={handleStartTimer}> Start</button>

      <div className="flex w-full justify-between items-center">
        <div>
          <TimerCard time={countdown?.days} />
        </div>
        <div>
          <TimerCard time={countdown?.hours} />
        </div>
        <div>
          <TimerCard time={countdown?.minutes} />
        </div>
        <div>
          <TimerCard time={countdown?.seconds} />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
