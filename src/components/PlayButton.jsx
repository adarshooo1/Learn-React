/* eslint-disable react/prop-types */
import { useState } from "react";

const PlayButton = ({ children, onPlay, onPause }) => {
  console.log("Render Play-Button");
  let [playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation(); //Helping is manage event-propagation/event-bubbling
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  }

  return (
    <div className="p-4 w-[310px]">
      <button
        className="h-8 w-20 text-black bg-white border-black border-2 rounded-md hover:transition hover:shadow-slate-950 hover:shadow-sm"
        onClick={handleClick}
      >
        {children}
        {playing ? "PAUSE ▶️" : "PLAY ⏸️"}
      </button>
    </div>
  );
};

export default PlayButton;
