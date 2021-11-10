import { useEffect, useContext } from "react";
import { Pagination } from "semantic-ui-react";

import { AppContext } from "../../ui/common/context";

const CustomPagination = ({ route, getData, data }) => {
  const {
    state: { activePage },
    changeActivePage,
  } = useContext(AppContext);

  useEffect(() => {
    return () => changeActivePage(1);
  }, []);

  const handlePageChange = (pageNumber) => {
    const [url, value1 = "", value2 = "", value3 = ""] =
      pageNumber > activePage
        ? data.info.next.split("&")
        : data.info.prev.split("&");

    changeActivePage(pageNumber);
    getData(`${route}?page=${pageNumber}&${value1}&${value2}&${value3}`);
  };

  return (
    <div className="mt-3 d-flex justify-content-center">
      {data.info.pages > 1 && (
        <Pagination
          activePage={activePage}
          totalPages={data.info.pages}
          onPageChange={(e, { activePage }) => handlePageChange(activePage)}
        />
      )}
    </div>
  );
};

export default CustomPagination;
