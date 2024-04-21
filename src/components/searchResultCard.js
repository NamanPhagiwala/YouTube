import { Link } from "react-router-dom";

const ResultCard = ({ details }) => {
  const { snippet } = details;
  const { title, description, thumbnails, channelTitle, publishTime } = snippet;

  const calculateTimeDifference = (timestamp) => {
    const now = new Date();
    const targetDate = new Date(timestamp);
    const timeDiff = Math.abs(now - targetDate) / 1000; // Time difference in seconds

    const intervals = {
      year: Math.floor(timeDiff / (3600 * 24 * 365)),
      month: Math.floor(timeDiff / (3600 * 24 * 30)),
      day: Math.floor(timeDiff / (3600 * 24)),
      hour: Math.floor(timeDiff / 3600),
      minute: Math.floor(timeDiff / 60),
    };

    for (const [unit, value] of Object.entries(intervals)) {
      if (value >= 1) {
        return `${value} ${unit}${value !== 1 ? "s" : ""} ago`;
      }
    }

    return `just now`;
  };
  return (
    <div className="flex gap-4">
      <Link to={`/watch?v=` + details.id.videoId}>
        <img
          className="rounded-lg hover:rounded-none cursor-pointer"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </Link>
      <ul className="p-2 flex flex-col gap-2">
        <div>
          <Link to={`/watch?v=` + details.id.videoId}>
            <li className="font-bold pt-2 hover:underline cursor-pointer">
              {title}
            </li>
          </Link>
          <div>{calculateTimeDifference(publishTime)}</div>
        </div>
        <li>{channelTitle}</li>
        <li className="text-sm">{description}</li>
      </ul>
    </div>
  );
};

export default ResultCard;
