import PlayButton from "./PlayButton";
import Like from "./Like";
import Video from "./Video";

function VideoList({ videos, deleteVideo, editVideo }) {
  return (
    <div className="w-full">
      <div className="flex w-full">
        {videos.map((video, index) => (
          <Video
            key={index}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
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
