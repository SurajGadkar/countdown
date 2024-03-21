import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import TimerCard from "./TimerCard";

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [selected, setSelected] = useState(null);
  const [total, setTotal] = useState(null);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(null);

  const [error, setError] = useState("");

  const handleStartTimer = () => {
    if (validate()) {
      calculate();
      setRunning(true);
    }
  };

  const validate = () => {
    const current = new Date();
    const daysDiff = (selected - current) / (1000 * 60 * 60 * 24);
    console.log(daysDiff);
    if (!selected) {
      setError("Please select the date/time from above calender");
      return false;
    } else if (selected <= current) {
      setError("Selected date/time cannot be less than now.");
      return false;
    } else if (daysDiff > 99) {
      setError("Countdown cannot be set for more than 99 days.");
      return false;
    } else {
      return true;
    }
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

  const handleStopTimer = () => {
    setRunning(false);
    setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setSelected(null);
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
      if (!running) {
        clearInterval(timer);
        return;
      }
      updateCountdown();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [total, running]);

  return (
    <div className="flex flex-col justify-between items-center   h-full">
      <DateTimePicker
        className="border-2 border-white"
        onChange={setSelected}
        value={selected}
      />

      {!running ? (
        <button
          className="bg-inherit  hover:bg-green-700 hover:text-white border-2 border-slate-400 rounded m-2 p-2 w-[120px]"
          onClick={handleStartTimer}
        >
          {" "}
          <h1 className="text-md md:text-lg text-white"> Start</h1>
        </button>
      ) : (
        <button
          className="bg-inherit  hover:bg-red-700 hover:text-white border-2 border-slate-400 rounded m-2 p-2 w-[120px]"
          onClick={handleStopTimer}
        >
          {" "}
          <h1 className="text-md md:text-lg text-white"> Stop</h1>
        </button>
      )}
      
      {done !== null ? (
        <p className="text-green-500"> Timer is complete!</p>
      ) : (
        <></>
      )}

      {error && !running && (
        <p className="text-sm md:text-lg text-red-100"> {error}</p>
      )}

      <div className="flex w-full justify-between items-center">
        <div>
          <TimerCard time={countdown?.days} title={"Days"} />
        </div>
        <div>
          <TimerCard time={countdown?.hours} title={"Hours"} />
        </div>
        <div>
          <TimerCard time={countdown?.minutes} title={"Minutes"} />
        </div>
        <div>
          <TimerCard time={countdown?.seconds} title={"Seconds"} />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
