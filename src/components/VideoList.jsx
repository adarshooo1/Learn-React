import PlayButton from "./PlayButton";
import Like from "./Like";
import Video from "./Video";

function VideoList({ videos }) {
  return (
    <div>
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
    </div>
  );
}

export default VideoList;
