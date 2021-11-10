import { useEffect, useState } from "react";

import { AddWatchListItem, WatchList } from "./blocks";

const MyWatchList = () => {
  const list = localStorage.getItem("my-watch-list");

  const [watchList, setWatchList] = useState(list ? [...JSON.parse(list)] : []);

  useEffect(() => {
    localStorage.setItem("my-watch-list", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <div>
      <h1>My Watch List</h1>
      <AddWatchListItem watchList={watchList} setWatchList={setWatchList} />
      {!!watchList.length && (
        <WatchList watchList={watchList} setWatchList={setWatchList} />
      )}
    </div>
  );
};

export default MyWatchList;
