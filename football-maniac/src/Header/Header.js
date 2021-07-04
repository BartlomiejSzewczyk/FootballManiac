import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as appActions from "../actions/appActions";

const HeaderField = styled.div`
  width: 100%;
  height: 100px;
  background-color: green;
`;

const Header = () => {
  const [testData, setTestData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.getTestData(setTestData));
  }, []);

  return <HeaderField>aTest</HeaderField>;
};

export default Header;
