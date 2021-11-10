import { useEffect } from "react";
import { Loader } from "semantic-ui-react";

import ROUTES from "../../../api/routing";
import CharacterList from "./blocks/CharacterList";
import useRequest from "../../../hooks/useRequest";
import FilterBar from "./blocks/FilterBar";
import CustomPagination from "../../../components/CustomPagination";

const Characters = () => {
  const { getData, data, isLoading, isError } = useRequest();

  useEffect(() => {
    getData(ROUTES.GET_CHARACTERS);
  }, []);

  return (
    <div>
      {!!data.results.length && <FilterBar getData={getData} />}
      {isLoading ? (
        <div className="mt-3">
          <Loader active inline="centered" size="massive" />
        </div>
      ) : !!data.results.length ? (
        <>
          <CharacterList
            characters={data.results}
            isLoading={isLoading}
            isError={isError}
          />
        </>
      ) : (
        "No Data"
      )}
      <CustomPagination
        route={ROUTES.GET_CHARACTERS}
        getData={getData}
        data={data}
      />
    </div>
  );
};

export default Characters;
