import { useState } from "react";

const useRequest = () => {
  const [data, setData] = useState({
    info: { count: null, next: null, pages: null, prev: null },
    results: [],
  });
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = (url) => {
    setData({
      info: { count: null, next: null, pages: null, prev: null },
      results: [],
    });
    setIsloading(true);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setIsloading(false);
        setData(data);
      })
      .catch((e) => {
        setIsloading(false);
        setIsError(true);
      });
  };

  return { getData, data, isLoading, isError };
};

export default useRequest;
