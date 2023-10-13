import Video from "./components/Video.jsx";
import "./index.css"; //This is mandatory to implement

function App() {
  let obj = {
    title: "A latest React.js tutorial",
    channel: "Let`s Code In",
    views: "2.5M",
    time: "1 year ago",
    verified: false,
  };

  return (
    <>
      <div>YOUTUBE</div>
      <div className="flex">
        <Video {...obj} />
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
        />
      </div>
    </>
  );
}

export default App;
