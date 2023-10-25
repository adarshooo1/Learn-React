import { MdVerified } from "react-icons/md";

const Video = ({
  id,
  title,
  channel,
  views,
  time,
  verified,
  children,
  deleteVideo,
  editVideo,
}) => {
  console.log("Render Video");

  return (
    <>
      <div className="flex flex-col w-[253px]">
        <div className="h-[200px] bg-black w-[252px] flex justify-center items-center rounded-lg ml-2 mr-2">
          <div className="w-[254px] h-[200px]">
            <div className="relative top-0">
              <button
                className="absolute font-extrabold bg-gray-600 text-white w-8 h-8 rounded-full top-2 right-12"
                onClick={() => editVideo(id)}
              >
                ✏️
              </button>
              <button
                className="absolute font-extrabold bg-red-600 text-white w-8 h-8 rounded-full top-2 right-2"
                onClick={() => deleteVideo(id)}
              >
                🗑️
              </button>
              <img
                className="rounded-lg"
                src={`https://loremflickr.com/253/142?random=${id}`}
                alt="Random Video Thumbnail"
              />
            </div>

            <div className="flex pt-2 absolute top-[10rem]">
              <div className="col-span-1">
                {/* Image */}
                <img
                  className="rounded-full ml-2 mt-2"
                  src={`https://placebeard.it/33/32?random=${id}`}
                  alt="Profile Image"
                />
              </div>

              {/* Description */}
              <div className="absolute left-[54px]">
                <div className="flex flex-col w-max">
                  <span className="font-bold text-xs text-white w-max">
                    {title}
                  </span>
                  <span className="flex text-gray-400 text-[11px] font-semibold">
                    <span className="flex text-gray-400 text-[11px] font-semibold justify-center text-center items-center">
                      {channel}
                      {verified && (
                        <span className="ml-1">
                          <MdVerified />
                        </span>
                      )}
                    </span>
                  </span>
                </div>
                <span className="flex w-max">
                  <span className="text-gray-400 text-[11px] font-semi-bold w-max">
                    {views} views
                  </span>
                  <span className="text-gray-400 text-[11px] font-semi-bold ml-2 flex justify-center w-max">
                    <span className="mr-[1px] w-max">•</span> {time}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Video;
