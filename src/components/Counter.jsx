/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  console.log("Counter")
  const [count, setCount] = useState(0);

  //   Count
  function handleCountChange(num, e) {
    e.stopPropagation();
    setCount((prevCount) => prevCount + num);
  }

  return (
    <div>
      <div className="flex items-center my-3">
        <button
          className="text-center h-7 w-7 justify-center mx-4 border-[2px] rounded-lg border-black"
          onClick={(e) => handleCountChange(-1, e)}
        >
          {" "}
          -{" "}
        </button>
        <div className="bg-slate-300 text-center border-black border-2 rounded-md w-[80px] h-[40px] font-bold text-2xl">
          {count}
        </div>
        <button
          className="text-center h-7 w-7 justify-center mx-4 border-[2px] rounded-lg border-black"
          onClick={(e) => handleCountChange(1, e)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
