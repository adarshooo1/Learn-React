import Counter from "./components/Counter.jsx";
import PlayButton from "./components/PlayButton.jsx";
import Video from "./components/Video.jsx";
import videos from "./data/Data.jsx";
import "./index.css"; //This is mandatory to implement

function App() {
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
          </Video>
        ))}
      </div>
      <Counter />
    </>
  );
}

export default App;
