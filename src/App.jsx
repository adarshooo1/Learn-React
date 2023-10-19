import { useState } from "react";
import AddVideo from "./components/AddVideo.jsx";
import Counter from "./components/Counter.jsx";
import Like from "./components/Like.jsx";
import PlayButton from "./components/PlayButton.jsx";
import Video from "./components/Video.jsx";
import videosData from "./data/Data.jsx";
import "./index.css"; //This is mandatory to implement

function App() {
  console.log("Render App");

  const [videos, setVideos] = useState(videosData);

  const handleAddVideo = (e) => {
    e.stopPropagation();
    setVideos((prevVideos) => [
      ...prevVideos,
      {
        title: "A Next.js 13.5.5 Tutorial",
        channel: "What Learn Next",
        views: "2k",
        time: "1 min ago",
        verified: true,
      },
    ]);
    console.log(videos);
  };

  return (
    <>
      <div className="max-w-full">
        <div>YOUTUBE</div>
        <div className="flex">
          {videos.map((video, index) => (
            <Video
              key={index}
              imgId={index}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
              verified={video.verified}
            >
              {
                <PlayButton
                  onPlay={() => {
                    console.log("PLAY", video.title);
                  }}
                  onPause={() => {
                    console.log("PAUSE", video.title);
                  }}
                ></PlayButton>
              }
              {<Like title={video.title} />}
            </Video>
          ))}
        </div>
        <Counter />

        <AddVideo onAddData={handleAddVideo} />
      </div>
    </>
  );
}

export default App;
