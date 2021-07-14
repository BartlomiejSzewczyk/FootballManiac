import styled from "styled-components";
import { leagueTables } from "../res/leagueTables";
import { useSelector } from "react-redux";
import TableClub from "./TableClub";
import CountryTableHeader from "./CountryTableHeader";
import Info from "./Info";

const TableField = styled.div``;

const Table = styled.table`
  background-color: #d4d4d4;
  margin: 2rem;
  position: relative;
  height: fit-content;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const CountryTableLeague = () => {
  const selectedCountry = useSelector(
    (state) => state.headerReducer.selectedCountry
  );

  const renderClubs = () => {
    return leagueTables[selectedCountry].map((clubInfo) => {
      return <TableClub clubInfo={clubInfo} />;
    });
  };

  return (
    <>
      <TableField>
        <Info text={"Tabela ligowa"} />
        <Table>
          <CountryTableHeader />
          <TableBody>{renderClubs()}</TableBody>
        </Table>
      </TableField>
    </>
  );
};

export default CountryTableLeague;
