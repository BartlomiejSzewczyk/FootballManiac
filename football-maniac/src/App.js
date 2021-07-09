import Header from "./Header/Header";
import "./styles/App.css";
import { useSelector } from "react-redux";
import WebSiteInfo from "./WebSiteInfo/WebSiteInfo";

const App = () => {
  const mainContent = useSelector((state) => state.appReducer.mainContent);
  const renderSiteBody = () => {
    switch (mainContent) {
      case "O stronie":
        return <WebSiteInfo />;
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
