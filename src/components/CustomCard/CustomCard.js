import React from "react";
import { Card, Grid, Popup } from "semantic-ui-react";

const Content = ({ item }) => {
  return (
    <div>
      <div>Name:{item.name}</div>
      <div>Gender:{item.gender}</div>
      <div>Species:{item.species}</div>
      <div>Status:{item.status}</div>
      <div>Origin:{item.origin.name}</div>
      <div>Location:{item.location.name}</div>
    </div>
  );
};

const CustomCard = ({ item }) => {
  return (
    <Grid.Column>
      <Popup
        content={<Content item={item} />}
        on="click"
        pinned
        trigger={
          <Card
            className="carditem"
            image={item.image}
            header={item.name}
            meta={item.gender}
            description={item.species}
          />
        }
      />
    </Grid.Column>
  );
};

export default CustomCard;
