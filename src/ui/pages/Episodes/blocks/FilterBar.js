import { useState } from "react";
import { Input } from "semantic-ui-react";

import ROUTES from "../../../../api/routing";
import FilterLayout from "../../../../components/FilterLayout/FilterLayout";

const FilterBar = ({ getData }) => {
  const [name, setName] = useState("");

  const handleApply = () => {
    getData(`${ROUTES.GET_EPISODES}/?name=${name}`);
  };

  const handleReset = () => {
    getData(ROUTES.GET_EPISODES);
    setName("");
  };

  return (
    <FilterLayout
      onApplyClick={handleApply}
      onResetClick={handleReset}
      isApplyDisabled={!name.trim()}
    >
      <Input
        name="name"
        placeholder="Episod name"
        value={name}
        onChange={(e, target) => setName(target.value)}
      />
    </FilterLayout>
  );
};

export default FilterBar;
