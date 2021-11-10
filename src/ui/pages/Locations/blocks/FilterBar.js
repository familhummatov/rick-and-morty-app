import { useState } from "react";
import { Input } from "semantic-ui-react";

import ROUTES from "../../../../api/routing";
import FilterLayout from "../../../../components/FilterLayout/FilterLayout";

const FilterBar = ({ getData }) => {
  const [filterState, setFilterState] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  const hasSelectedValue = () =>
    Object.keys(filterState).some((el) => !!filterState[el]);

  const handleChange = (e, target) => {
    const { name, value } = target;
    setFilterState((prev) => ({ ...filterState, [name]: value }));
  };

  const handleReset = () => {
    getData(ROUTES.GET_LOCATIONS);
    setFilterState({
      name: "",
      type: "",
      dimension: "",
    });
  };

  const handleApply = () => {
    getData(
      `${ROUTES.GET_LOCATIONS}/?name=${filterState.name}&type=${filterState.type}&dimension=${filterState.dimension}`
    );
  };

  const isApplyDisabled = !hasSelectedValue();

  return (
    <FilterLayout
      onApplyClick={handleApply}
      onResetClick={handleReset}
      isApplyDisabled={isApplyDisabled}
    >
      <Input
        name="name"
        placeholder="Name"
        value={filterState.name}
        onChange={handleChange}
      />
      <Input
        name="type"
        placeholder="Type"
        value={filterState.type}
        onChange={handleChange}
        className="mx-3"
      />
      <Input
        name="dimension"
        placeholder="Dimension"
        value={filterState.dimension}
        onChange={handleChange}
      />
    </FilterLayout>
  );
};

export default FilterBar;
