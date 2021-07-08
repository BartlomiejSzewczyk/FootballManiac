import styled from "styled-components";
import { useState } from "react";

const OptionField = styled.div`
  position: relative;
  font-size: 1.2rem;
  align-self: center;
  cursor: pointer;
  padding: 1.2rem;
  flex-grow: 1;
  color: white;
  text-align: center;
  &:hover {
    background-color: #189e18;
  }
`;

const TeamsMenuList = styled.div`
  text-align: center;
`;

const ListElement = styled.div`
  padding: 1rem;
  font-size: 1rem;
  background-color: #55945b;
  &:hover {
    background-color: #3f6b43;
  }
`;

const TeamsMenuField = styled.div`
  position: absolute;
  margin-top: 2.8rem;
  text-align: center;
  width: 100%;
  left: 0;
`;

const ListDivider = styled.div`
  height: 1px;
  background-color: black;
`;

const HeaderOption = ({ title }) => {
  const [teamsMenuActive, setTeamsMenuActive] = useState(false);
  return (
    <OptionField
      onMouseEnter={() => setTeamsMenuActive(true)}
      onMouseLeave={() => setTeamsMenuActive(false)}
    >
      <TeamsMenuField>
        {teamsMenuActive && (
          <TeamsMenuList>
            <ListElement>Niemcy</ListElement>
            <ListDivider />
            <ListElement>Anglia</ListElement>
          </TeamsMenuList>
        )}
      </TeamsMenuField>
      {title}
    </OptionField>
  );
};

export default HeaderOption;
