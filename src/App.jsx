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
          />
        ))}
        {/* 
        <Video
          title={"A latest Node.js tutorial"}
          channel={"Let`s Eco In"}
          views={"2.5K"}
          time={"2 months ago"}
          verified={true}
        />
        <Video
          title={"A latest Express.js tutorial"}
          channel={"Let`s Sword In"}
          views={"21M"}
          time={"1 day ago"}
          verified={true}
        />
        <Video
          title={"A latest MongoDB. tutorial"}
          channel={"MongoDB.ORG Classes"}
          views={"100k"}
          time={"3 months ago"}
          verified={false}
        /> */}
      </div>
    </>
  );
}

export default App;
