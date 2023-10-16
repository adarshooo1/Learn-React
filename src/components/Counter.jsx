/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  //   Like and Dislike
  function handleClick(e) {
    e.stopPropagation();
    if (!like) {
      setLike(true);
      console.log("Like");
    } else {
      setLike(false);
      console.log("Dislike");
    }
  }

  //   Count
  function handleCount(e) {
    e.stopPropagation();
    console.log(count);
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 0);
  }
  return (
    <div>
      <button
        className={`${
          like ? "bg-red-600" : "bg-white"
        } border-black border-2 ml-4 rounded-md w-[80px] h-[40px]`}
        onClick={handleClick}
      >
        {!like ? "LIKE" : "DISLIKE"}
      </button>
      <button
        className="bg-slate-500 border-black border-2 ml-4 rounded-md w-[80px] h-[40px]"
        onClick={handleCount}
      >
        {count}
      </button>
    </div>
  );
};

export default Counter;
