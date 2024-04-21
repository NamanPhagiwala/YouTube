import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { formatCompactNumber } from "../utils/helper";
import ResultCard from "./searchResultCard";
import { cacheSearchResults } from "../utils/searchResultSlice";

const SearchResults = () => {
  const { query } = useParams();
  console.log(query, useParams());
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const searchResultCache = useSelector((store) => store.searchResult);
  const dispatch = useDispatch();

  const getSearchResults = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setDetails(json.items);
    setLoading(false);
    console.log(json.items, "JSON");
    dispatch(
      cacheSearchResults({
        [query]: json.items,
      })
    );
  };
  useEffect(() => {
    if (searchResultCache[query]) {
      setDetails(searchResultCache[query]);
      setLoading(false);
    } else {
      getSearchResults();
    }
  }, [query]);
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full">Loading</div>
    );
  }
  return (
    <div className="flex flex-col gap-6 p-20">
      {details &&
        details?.map((item) => (
          <div key={item.id.videoId}>
            <ResultCard details={item} />
          </div>
        ))}
    </div>
  );
};

export default SearchResults;
