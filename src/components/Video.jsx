import PropTypes from "prop-types";
import { MdVerified } from "react-icons/md";

const Video = ({ title, channel, views, time, verified }) => {
  return (
    <>
      <div className="h-[210px] bg-black w-[260px] flex justify-center items-center rounded-lg ml-2 mr-2">
        <div className="w-[254px] h-[200px]">
          <img
            className="rounded-lg"
            src="https://loremflickr.com/253/142"
            alt="Pussy Cat"
          />
          <div className="flex pt-2">
            <div className="col-span-1">
              {/* Image */}
              <img
                className="rounded-full"
                src="https://placebeard.it/33/32"
                alt="Profile Image"
              />
            </div>

            {/* Description */}
            <div className="ml-2">
              <span className="flex flex-col">
                <span className="font-bold text-xs text-white h-1px">
                  {title}
                </span>
                <span className="flex text-gray-400 text-[11px] font-semibold">
                  {verified ? (
                    <span className="flex text-gray-400 text-[11px] font-semibold justify-center text-center items-center">
                      {channel}
                      <span className="ml-1">
                        <MdVerified />
                      </span>
                    </span>
                  ) : (
                    <span className="flex text-gray-400 text-[11px] font-semibold justify-center text-center items-center">
                      {channel}
                    </span>
                  )}
                </span>
              </span>
              <span className="flex">
                <span className="text-gray-400 text-[11px] font-semi-bold">
                  {views} views
                </span>
                <span className="text-gray-400 text-[11px] font-semi-bold ml-2 flex justify-center">
                  <span className="mr-[1px]">•</span> {time}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  verified: PropTypes.string.isRequired,
};

export default Video;