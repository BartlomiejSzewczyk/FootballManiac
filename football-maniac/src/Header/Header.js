import styled from "styled-components";
import HeaderOption from "./HeaderOption";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import "rc-menu/assets/index.css";
import Logo from "./Logo";

const HeaderField = styled.div`
  background-color: green;
  display: flex;
`;

const HeaderOptionsField = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

const optionNames = ["Drużyny", "Mecze"];

const Header = () => {
  const renderOptions = () => {
    return optionNames.map((option) => {
      return <HeaderOption title={option} />;
    });
  };

  return (
    <HeaderField>
      <Logo />
      <HeaderOptionsField>
        <HeaderOption title={"Drużyny"}></HeaderOption>
        <HeaderOption title={"Mecze"}></HeaderOption>
        <HeaderOption title={"O stronie"}></HeaderOption>
      </HeaderOptionsField>
    </HeaderField>
  );
};

export default Header;
