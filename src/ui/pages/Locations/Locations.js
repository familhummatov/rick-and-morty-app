import { useEffect } from "react";
import { Loader } from "semantic-ui-react";

import useRequest from "../../../hooks/useRequest";
import ROUTES from "../../../api/routing";
import { FilterBar, MainTable } from "./blocks";
import CustomPagination from "../../../components/CustomPagination";

const Locations = () => {
  const { getData, isLoading, data } = useRequest();

  useEffect(() => {
    getData(ROUTES.GET_LOCATIONS);
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
        route={ROUTES.GET_LOCATIONS}
        data={data}
        getData={getData}
      />
    </div>
  );
};

export default Locations;
