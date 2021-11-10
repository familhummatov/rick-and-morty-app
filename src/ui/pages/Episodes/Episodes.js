import { useEffect } from "react";
import { Loader } from "semantic-ui-react";

import useRequest from "../../../hooks/useRequest";
import { FilterBar, MainTable } from "./blocks";
import ROUTES from "../../../api/routing";
import CustomPagination from "../../../components/CustomPagination";

const Episodes = () => {
  const { getData, isLoading, data } = useRequest();

  useEffect(() => {
    getData(ROUTES.GET_EPISODES);
  }, []);

  return (
    <div>
      {!!data.results.length && <FilterBar getData={getData} />}
      {isLoading ? (
        <div className="mt-3">
          <Loader active inline="centered" size="massive" />
        </div>
      ) : !!data.results.length ? (
        <MainTable data={data} />
      ) : (
        "no data"
      )}

      <CustomPagination
        route={ROUTES.GET_EPISODES}
        getData={getData}
        data={data}
      />
    </div>
  );
};

export default Episodes;
