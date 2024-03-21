import "./App.css";
import Countdown from "./components/Countdown.jsx";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-bl from-blue-400 to-purple-500">
      <div className="flex flex-col items-center justify-evenly p-4min-h-[240px] md:min-h-[380px]">
        <h1 className="text-2xl md:text-5xl text-white">
          Countdown <span className="text-purple-700">Timer</span>
        </h1>
        <Countdown />
      </div>
    </div>
  );
}

export default App;
