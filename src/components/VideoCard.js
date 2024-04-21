import React from "react";
import { useSelector } from "react-redux";
import { formatCompactNumber } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`m-2 ${isMenuOpen ? "w-[27vw]" : "w-[23vw]"}`}>
      <img
        className="rounded-lg hover:rounded-none"
        alt="thumbnail"
        src={thumbnails.maxres.url}
      />
      <ul className="p-2">
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatCompactNumber(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
