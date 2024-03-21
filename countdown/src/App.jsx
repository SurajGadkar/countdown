import "./App.css";
import Countdown from "./components/Countdown.jsx";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center  bg-gradient-to-bl from-blue-400 to-purple-500">
      <div className="min-h-[360px] flex flex-col items-center justify-between border-2 border-black p-4">
        <h1 className="text-5xl text-white">
          Countdown <span className="text-purple-700">Timer</span>
        </h1>
        <Countdown />
      </div>
    </div>
  );
}

export default App;
