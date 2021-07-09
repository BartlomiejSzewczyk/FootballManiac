import styled from "styled-components";
import HeaderOption from "./HeaderOption";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import * as actionsApp from "../actions/appActions";
import CountriesOptions from "./CountriesOptions";

const HeaderField = styled.div`
  background-color: #161b22;
  display: flex;
`;

const HeaderOptionsField = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderField>
      <Logo />
      <HeaderOptionsField>
        <CountriesOptions />
        <HeaderOption
          title={"Drużyny"}
          tabs={["Niemcy", "Anglia", "Włochy", "Hiszpania"]}
        ></HeaderOption>
        <HeaderOption
          title={"Drużyny"}
          tabs={["Niemcy", "Anglia", "Włochy", "Hiszpania"]}
        ></HeaderOption>
        <HeaderOption
          title={"Mecze"}
          tabs={["Liga mistrzów", "Mistrzostwa Europy", "Liga Europy"]}
        ></HeaderOption>
        <HeaderOption title={"O stronie"} tabs={[]}></HeaderOption>
      </HeaderOptionsField>
    </HeaderField>
  );
};

export default Header;
