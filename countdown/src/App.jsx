import { useState } from "react";
import "./App.css";
import Date from "./components/Date";
import ShowTimer from "./components/ShowTimer.jsx";
import moment from "moment";

function App() {
  const [selected, setSelected] = useState(null);

  const disablePrevDays = (current) => {
    const yesterday = moment().subtract(1, "day");
    return current.isAfter(yesterday);
  };

  const validations = () => {};

  const handleTimerStart = () => {
    const dateString = selected.toLocaleDateString();
    const timeString = selected.toLocaleTimeString();
    console.log(dateString, timeString);
  };

  const handleTimerStop = () => {};

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center  bg-gradient-to-bl from-blue-400 to-purple-500">
      <div className="min-h-[360px] flex flex-col items-center justify-between border-2 border-black p-4">
        <h1 className="text-5xl text-white">
          Countdown <span className="text-purple-700">Timer</span>
        </h1>

        <button
          className="border-2 border-white hover:bg-purple-500"
          onClick={handleTimerStart}
        >
          Start Timer
        </button>

        <Date selected={selected} setSelected={setSelected} />
        <ShowTimer />
      </div>
    </div>
  );
}

export default App;
