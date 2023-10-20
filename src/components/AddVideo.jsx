import { useState } from "react";

function AddVideo({ addVideo }) {
  console.log("Render Add Video");

  const [videos, setVideos] = useState({
    views: "2k",
    time: "1 min ago",
    verified: true,
  });

  function handleSubmit(e) {
    e.preventDefault();
    addVideo(videos);
  }

  function handleChange(e) {
    e.stopPropagation();
    setVideos({ ...videos, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  }

  return (
    <div>
      <form className="flex  flex-col gap-2">
        <input
          className="bg-slate-400 h-6 w-64 font-sans font-semibold text-black placeholder-black"
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          className="bg-slate-400 h-6 w-64 font-sans font-semibold text-black placeholder-black"
          type="text"
          name="channel"
          required
          onChange={handleChange}
          placeholder="channel"
        />
        <button
          className="bg-black w-40 text-white border-red-700 border-[1px]"
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
