import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";

import CustomCard from "../../../../../components/CustomCard";

const CharacterList = ({ characters }) => {
  return (
    <Grid stackable columns={4}>
      {characters.map((item) => (
        <CustomCard key={item.name} item={item} />
      ))}
    </Grid>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.shape({
    results: PropTypes.array.isRequired,
  }).isRequired,
};

export default CharacterList;
