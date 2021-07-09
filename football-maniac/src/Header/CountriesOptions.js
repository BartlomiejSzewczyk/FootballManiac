import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionsApp from "../actions/appActions";
import { iconsImages } from "../res/iconsImages";

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
  ${(props) => (props.isSelected ? `background-color: #2e3846` : ``)}
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
  margin-top: 1.2rem;
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

const IconImage = styled.img`
  width: 100%;
`;
const CountriesOptions = () => {
  const [teamsMenuActive, setTeamsMenuActive] = useState("");
  const mainContent = useSelector((state) => state.appReducer.mainContent);
  const dispatch = useDispatch();
  const countries = [
    {
      name: "Niemcy",
      flag: "germanyFlag",
    },
    {
      name: "Włochy",
      flag: "italyFlag",
    },
    {
      name: "Hiszpania",
      flag: "spainFlag",
    },
  ];

  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <>
          <ListElement
            onClick={() => {
              dispatch(actionsApp.changeState("SET_MAIN_CONTENT", "Kraje"));
              dispatch(
                actionsApp.changeState("SET_SELECTED_COUNTRY", country.name)
              );
            }}
          >
            {country.name}
            <IconField>
              <IconImage src={iconsImages[country.flag]} />
            </IconField>
          </ListElement>
          <ListDivider />
        </>
      );
    });
  };

  return (
    <OptionField
      onMouseEnter={() => setTeamsMenuActive(true)}
      onMouseLeave={() => setTeamsMenuActive("")}
      isSelected={mainContent === "Kraje"}
    >
      Kraje
      <TeamsMenuField>
        {teamsMenuActive && <>{renderCountries()}</>}
      </TeamsMenuField>
    </OptionField>
  );
};

export default CountriesOptions;
