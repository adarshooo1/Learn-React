import { useState } from "react";
import AddVideo from "./components/AddVideo.jsx";
import Counter from "./components/Counter.jsx";
import videosData from "./data/Data.jsx";
import "./index.css"; //This is mandatory to implement to use tailwind css property.
import VideoList from "./components/VideoList.jsx";

function App() {
  console.log("Render App");
  const [videos, setVideos] = useState(videosData);
  const [edit, setEdit] = useState(null);

  function addVideo(video) {
    setVideos([...videos, video]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
    console.log(id);
  }

  function editVideo(id) {
    // console.log(videos.find((video) => video.id === id));
    setEdit(videos.find((video) => video.id === id));
  }

  return (
    <>
      <div>YOUTUBE</div>
      <div className="w-full">
        <VideoList
          editVideo={editVideo}
          deleteVideo={deleteVideo}
          videos={videos}
        />
        <AddVideo addVideo={addVideo} editableVideo={edit} />
      </div>
      <Counter />
    </>
  );
}

export default App;
