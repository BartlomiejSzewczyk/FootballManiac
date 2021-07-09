import Header from "./Header/Header";
import "./styles/App.css";
import { useSelector } from "react-redux";
import WebSiteInfo from "./WebSiteInfo/WebSiteInfo";
import CountryMainWindow from "./Countries/CountryMainWIndow";

const App = () => {
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

  return (
    <>
      <Header /> {renderSiteBody()}
    </>
  );
};

export default App;
