import { useState } from "react";

function AddVideo({ addVideo }) {
  const initialState = {
    title: "",
    channel: "",
    views: "",
    time: "1 min ago",
    verified: false, // Initialize it as false
  };

  const [videos, setVideos] = useState(initialState);

  function handleVerified(e) {
    e.stopPropagation();
    setVideos({ ...videos, verified: !videos.verified });
    console.log(videos.verified ? "verified" : "unverified");
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    addVideo(videos);
    setVideos(initialState);
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
          value={videos.title}
        />
        <input
          className="bg-slate-400 h-6 w-64 font-sans font-semibold text-black placeholder-black"
          type="text"
          name="channel"
          required
          onChange={handleChange}
          placeholder="channel"
          value={videos.channel}
        />
        <input
          className="bg-slate-400 h-6 w-64 font-sans font-semibold text-black placeholder-black"
          type="text"
          name="views"
          required
          onChange={handleChange}
          placeholder="views"
          value={videos.views}
        />

        <span
          className={`${
            videos.verified ? "bg-blue-600" : "bg-slate-600"
          } w-40 text-white border-red-700 border-[1px]`}
          onClick={handleVerified}
        >
          {videos.verified ? "verified" : "unverified"}
        </span>

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
