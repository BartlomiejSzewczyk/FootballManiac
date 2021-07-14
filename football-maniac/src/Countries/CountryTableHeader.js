import styled from "styled-components";

const TableHeader = styled.thead``;

const TableHeaderRow = styled.tr``;

const TableHeaderData = styled.th``;

const CountryTableHeader = () => {
  return (
    <>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderData>Drużyna</TableHeaderData>
          <TableHeaderData>M</TableHeaderData>
          <TableHeaderData>W</TableHeaderData>
          <TableHeaderData>R</TableHeaderData>
          <TableHeaderData>P</TableHeaderData>
          <TableHeaderData>Pts</TableHeaderData>
          <TableHeaderData>Goals</TableHeaderData>
        </TableHeaderRow>
      </TableHeader>
    </>
  );
};

export default CountryTableHeader;
