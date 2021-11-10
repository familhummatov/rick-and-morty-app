import { useContext } from "react";
import { Button } from "semantic-ui-react";

import { AppContext } from "../../ui/common/context";

const FilterLayout = ({
  onApplyClick,
  isApplyDisabled,
  onResetClick,
  children,
}) => {
  const { changeActivePage } = useContext(AppContext);

  const handleApply = () => {
    changeActivePage(1);
    onApplyClick();
  };

  const handleReset = () => {
    changeActivePage(1);
    onResetClick();
  };

  return (
    <>
      <h2>Filter</h2>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>{children}</div>
        <div>
          <Button
            disabled={isApplyDisabled}
            onClick={handleApply}
            className="mt-3"
            primary
          >
            Apply
          </Button>
          <Button onClick={handleReset} secondary>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterLayout;
