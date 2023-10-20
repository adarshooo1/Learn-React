import { useState } from "react";
import AddVideo from "./components/AddVideo.jsx";
import Counter from "./components/Counter.jsx";
import videosData from "./data/Data.jsx";
import "./index.css"; //This is mandatory to implement to use tailwind css property.
import VideoList from "./components/VideoList.jsx";

function App() {
  console.log("Render App");
  const [videos, setVideos] = useState(videosData);

  function  addVideo(video) {
    setVideos([...videos, video]);
  }

  return (    
    <>
      <div>YOUTUBE</div>
      <div>
        <VideoList videos={videos} />
        <AddVideo addVideo={addVideo} />
      </div>
      <Counter />
    </>
  );
}

export default App;
