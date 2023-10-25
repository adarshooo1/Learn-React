import React from "react";

function List({videos}) {
  return <ul>
    {videos.map((video => <li>{video.title}</li>))}
  </ul>;
}

export default List;
