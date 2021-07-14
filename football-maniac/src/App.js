import Header from "./Header/Header";
import "./styles/App.css";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import WebSiteInfo from "./WebSiteInfo/WebSiteInfo";
import CountryMainWindow from "./Countries/CountryMainWIndow";
import styled from "styled-components";

const AppField = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  overflow: auto;
`;

const App = () => {
  const appFieldRef = useRef(null);
  const headerRef = useRef(null);
  const mainContent = useSelector((state) => state.appReducer.mainContent);
  const renderSiteBody = () => {
    switch (mainContent) {
      case "O stronie":
        return <WebSiteInfo />;
      case "Kraje":
        return <CountryMainWindow />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (appFieldRef && headerRef) {
      appFieldRef.current.addEventListener("scroll", makeHeaderSticky);
    }
    return () =>
      appFieldRef.current.removeEventListener("scroll", makeHeaderSticky);
  }, []);

  const makeHeaderSticky = () => {
    if (appFieldRef.current.scrollTop > headerRef.current.clientHeight) {
      headerRef.current.style.position = "fixed";
    } else {
      headerRef.current.style.position = "relative";
    }
  };

  return (
    <AppField ref={appFieldRef}>
      <Header headerRef={headerRef} /> {renderSiteBody()}
    </AppField>
  );
};

export default App;
