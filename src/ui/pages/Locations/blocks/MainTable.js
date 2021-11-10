import { Table } from "semantic-ui-react";

const MainTable = ({ data }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>№</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Dimension</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.results.map((el, i) => (
          <Table.Row key={el.name}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{el.name}</Table.Cell>
            <Table.Cell>{el.type}</Table.Cell>
            <Table.Cell>{el.dimension}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default MainTable;
