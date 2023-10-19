/* eslint-disable react/prop-types */
function AddVideo({ onAddData }) {
  console.log("Render Add Video");

  return (
    <button
      className="rounded-md w-[90px] h-[40px] bg-gray-800 text-lime-400"
      onClick={onAddData}
    >
      Add Video
    </button>
  );
}

export default AddVideo;
