import { useState } from "react";
import AddVideo from "./components/AddVideo.jsx";
import Counter from "./components/Counter.jsx";
import Like from "./components/Like.jsx";
import PlayButton from "./components/PlayButton.jsx";
import Video from "./components/Video.jsx";
import videosData from "./data/Data.jsx";
import "./index.css"; //This is mandatory to implement to use tailwind css property.

function App() {
  console.log("Render App");

  const [videos, setVideos] = useState(videosData);

  function addVideo(video) {
    setVideos([...videos, video]);
  }

  return (
    <>
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
      <AddVideo addVideo={addVideo} />
    </>
  );
}

export default App;
