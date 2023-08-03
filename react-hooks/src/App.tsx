import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex justify-center border border-black h-screen bg-slate-200">
      <div className="rounded-md bg-green-500 w-[35%] h-72 flex flex-col items-center justify-center mt-20 gap-8 py-8">
        <div className="text-2xl text-bold text-white">
          <h1>Counter</h1>
        </div>
        <h2 className="text-xl bg-green-300 px-4 py-2 rounded-md">
          Count: {count}
        </h2>
        <div className="flex justify-center gap-10 mb-3">
          <button
            className=" px-4 py-2 rounded-md bg-green-200"
            onClick={incrementCount}
          >
            Increment
          </button>
          <button
            ref={buttonRef}
            className="px-4 py-2 rounded-md bg-green-200"
            onClick={decrementCount}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
