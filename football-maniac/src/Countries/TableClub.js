import styled from "styled-components";

const TableClubField = styled.tr`
  font-size: 0.8rem;
`;

const TableClubData = styled.td`
  margin: 0 10px;
  padding: 0 10px;
`;

const TableClub = ({ clubInfo }) => {
  return (
    <TableClubField>
      <TableClubData>{clubInfo.name}</TableClubData>
      <TableClubData>{clubInfo.matches}</TableClubData>
      <TableClubData>{clubInfo.wins}</TableClubData>
      <TableClubData>{clubInfo.draws}</TableClubData>
      <TableClubData>{clubInfo.losers}</TableClubData>
      <TableClubData>{clubInfo.points}</TableClubData>
      <TableClubData>{`${clubInfo.goalsScored} - ${clubInfo.goalsConceded}`}</TableClubData>
    </TableClubField>
  );
};

export default TableClub;
