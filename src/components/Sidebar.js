import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="sticky top-16 bg-white h-screen px-12 py-5 shadow-lg">
      <ul className="">
        <li className="px-5 py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 py-2">
          <Link to="/demo" className="[isActive]:bg-black">
            Demo
          </Link>
        </li>
        <li className="px-5 py-2">Shorts</li>
        <li className="px-5 py-2">Videos</li>
        <li className="px-5 py-2">Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="px-5 py-2">Music</li>
        <li className="px-5 py-2">Sports</li>
        <li className="px-5 py-2">Gaming</li>
        <li className="px-5 py-2">Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className="px-5 py-2">Music</li>
        <li className="px-5 py-2">Sports</li>
        <li className="px-5 py-2">Gaming</li>
        <li className="px-5 py-2">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
