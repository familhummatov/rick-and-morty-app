import { Table } from "semantic-ui-react";

const MainTable = ({ data }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Episode</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.results.map((el) => (
          <Table.Row key={el.name}>
            <Table.Cell>{el.episode}</Table.Cell>
            <Table.Cell>{el.name}</Table.Cell>
            <Table.Cell>{el.air_date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default MainTable;
