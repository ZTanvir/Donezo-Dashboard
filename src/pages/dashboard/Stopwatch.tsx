import { useState, useEffect, useRef } from "react";
import { Pause, Play, SquareStop } from "lucide-react";

const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col rounded-xl bg-green-900 p-3 text-white shadow-lg">
      <h3 className="mb-4 text-center text-xl md:text-left">Time tracker</h3>
      <div className="mb-4 self-center text-3xl">{formatTime(time)}</div>

      <div className="flex gap-2 self-center">
        {!isRunning ? (
          <button
            onClick={() => setIsRunning(true)}
            className="rounded-full bg-green-600 px-2 py-2 font-bold transition hover:cursor-pointer hover:bg-green-500"
          >
            <Play />
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(false)}
            className="rounded-full bg-yellow-600 px-2 py-2 font-bold transition hover:cursor-pointer hover:bg-yellow-500"
          >
            <Pause />
          </button>
        )}

        <button
          onClick={handleReset}
          className="= rounded-full bg-red-500 px-2 py-2 font-bold transition hover:cursor-pointer hover:bg-red-400"
        >
          <SquareStop />
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
