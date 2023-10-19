/* eslint-disable react/prop-types */
import { useState } from "react";

function Like({ title }) {
  console.log("Render Like");

  const [like, setLike] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    if (!like) {
      setLike(true);
      console.log("Like", title);
    } else {
      setLike(false);
      console.log("Dislike", title);
    }
  }

  return (
    <>
      <button
        className={`${
          like ? "bg-red-600" : "bg-white"
        } border-black border-2 ml-4 rounded-md w-[80px] h-[40px]`}
        onClick={handleClick}
      >
        {!like ? "LIKE" : "DISLIKE"}
      </button>
    </>
  );
}

export default Like;
