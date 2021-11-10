import { Form } from "semantic-ui-react";

const FilterItem = ({ options = [], filterState, handleChange }) => {
  return (
    <Form>
      <Form.Group grouped>
        {options.map((el) => (
          <Form.Radio
            key={el.value}
            checked={filterState[el.type] === el.value}
            label={el.label}
            name={el.type}
            type="radio"
            value={el.value}
            onChange={handleChange}
          />
        ))}
      </Form.Group>
    </Form>
  );
};

export default FilterItem;
