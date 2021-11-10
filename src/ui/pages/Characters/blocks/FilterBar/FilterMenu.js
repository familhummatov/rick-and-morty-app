import { useState } from "react";
import { Accordion, Menu } from "semantic-ui-react";
import FilterItem from "./FilterItem";

const genderOptions = [
  {
    type: "status",
    label: "Alive",
    value: "alive",
  },
  { type: "status", label: "Dead", value: "dead" },
  { type: "status", label: "Unknown", value: "unknown" },
];

const statusOptions = [
  { type: "gender", label: "Male", value: "male" },
  { type: "gender", label: "Female", value: "female" },
  { type: "gender", label: "Genderless", value: "genderless" },
  { type: "gender", label: "Unknown", value: "unknown" },
];

const FilterMenu = ({ filterState, handleChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  return (
    <Accordion as={Menu} vertical>
      <Menu.Item>
        <Accordion.Title
          active={activeIndex === 0}
          content="Status"
          index={0}
          onClick={handleClick}
        />
        <Accordion.Content
          active={activeIndex === 0}
          content={
            <FilterItem
              options={genderOptions}
              filterState={filterState}
              handleChange={handleChange}
            />
          }
        />
      </Menu.Item>

      <Menu.Item>
        <Accordion.Title
          active={activeIndex === 1}
          content="Gender"
          index={1}
          onClick={handleClick}
        />
        <Accordion.Content
          active={activeIndex === 1}
          content={
            <FilterItem
              options={statusOptions}
              filterState={filterState}
              handleChange={handleChange}
            />
          }
        />
      </Menu.Item>
    </Accordion>
  );
};

export default FilterMenu;
