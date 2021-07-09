import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionsApp from "../actions/appActions";

const OptionField = styled.div`
  position: relative;
  font-size: 1rem;
  align-self: center;
  cursor: pointer;
  padding: 1.2rem;
  flex-grow: 1;
  color: white;
  text-align: center;
  z-index: 1;
  border-right: 1px solid white;
  &:hover {
    background-color: #2e3846;
  }
  &:last-child {
    border: none;
  }
`;

const TeamsMenuList = styled.div`
  text-align: center;
`;

const ListElement = styled.div`
  padding: 0.9rem;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: #c4d4e8;
  color: black;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: #95a0af;
  }
`;

const TeamsMenuField = styled.div`
  position: absolute;
  margin-top: 2.4rem;
  text-align: center;
  width: 100%;
  left: 0;
`;

const ListDivider = styled.div`
  height: 1px;
  background-color: black;
`;

const IconField = styled.div`
  width: 1rem;
  height: 1rem;
  align-self: center;
`;

const HeaderOption = ({ title, tabs }) => {
  const [teamsMenuActive, setTeamsMenuActive] = useState("");
  const dispatch = useDispatch();

  const renderMenuList = () => {
    return (
      <TeamsMenuList>
        {tabs.map((tab) => (
          <>
            <ListElement>
              {tab}
              <IconField></IconField>
            </ListElement>
            <ListDivider />
          </>
        ))}
      </TeamsMenuList>
    );
  };

  return (
    <OptionField
      onMouseEnter={() => setTeamsMenuActive(true)}
      onMouseLeave={() => setTeamsMenuActive("")}
      onClick={() => {
        dispatch(actionsApp.changeState("SET_MAIN_CONTENT", title));
      }}
    >
      <TeamsMenuField>{teamsMenuActive && renderMenuList()}</TeamsMenuField>
      {title}
    </OptionField>
  );
};

export default HeaderOption;
