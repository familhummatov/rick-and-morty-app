import { useState } from "react";
import { Input } from "semantic-ui-react";

import FilterLayout from "../../../../../components/FilterLayout";
import FilterMenu from "./FilterMenu";

import ROUTES from "../../../../../api/routing";

const FilterBar = ({ getData }) => {
  const [filterState, setFilterState] = useState({
    status: "",
    gender: "",
    species: "",
  });

  const hasSelectedValue = () =>
    Object.keys(filterState).some((el) => !!filterState[el]);

  const handleChange = (e, target) => {
    const { name, value } = target;
    setFilterState((prev) => ({ ...filterState, [name]: value }));
  };

  const handleReset = () => {
    getData(ROUTES.GET_CHARACTERS);
    setFilterState({
      status: "",
      gender: "",
      species: "",
    });
  };

  const handleApply = () => {
    getData(
      `${ROUTES.GET_CHARACTERS}/?status=${filterState.status}&gender=${filterState.gender}&species=${filterState.species}`
    );
  };

  const isApplyDisabled = !hasSelectedValue();

  return (
    <FilterLayout
      onApplyClick={handleApply}
      onResetClick={handleReset}
      isApplyDisabled={isApplyDisabled}
    >
      <FilterMenu filterState={filterState} handleChange={handleChange} />
      <Input
        name="species"
        placeholder="Species"
        value={filterState.species}
        onChange={handleChange}
      />
    </FilterLayout>
  );
};

export default FilterBar;
