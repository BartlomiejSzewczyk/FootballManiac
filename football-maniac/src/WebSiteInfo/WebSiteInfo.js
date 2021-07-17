import styled from "styled-components";
import { iconsUsage } from "../res/iconsUsage";
import { iconsImages } from "../res/iconsImages";

const WebSiteInfoField = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;
`;

const IconField = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 3px inset #667ea0;
  margin: 0.3rem 0.5rem;
  padding: 0.2rem;
  border-radius: 0.4rem;
`;

const IconInfoField = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  margin: 1rem;
  color: white;
  font-style: italic;
  text-align: center;
`;

const IconsTable = styled.div`
  margin: 1rem;
  background-color: #617490;
`;

const IconImage = styled.img`
  width: 100%;
`;

const WebSiteInfo = () => {
  const renderIcons = () => {
    return iconsUsage.map((icon) => {
      return (
        <IconInfoField>
          <IconField>
            <IconImage src={iconsImages[icon.image]} />
          </IconField>
          <div>
            Icons made by{" "}
            <a href={icon.madeRef} title={icon.madeTitle}>
              {icon.madeName}{" "}
            </a>
            from{" "}
            <a href={icon.fromRef} title={icon.fromTitle}>
              {icon.fromName}
            </a>
          </div>
        </IconInfoField>
      );
    });
  };

  return (
    <>
      <WebSiteInfoField>
        <Info>Wykorzystane ikony na stronie:</Info>
        <IconsTable>{renderIcons()}</IconsTable>
      </WebSiteInfoField>
    </>
  );
};

export default WebSiteInfo;
