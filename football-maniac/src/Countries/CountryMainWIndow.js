import { useSelector } from "react-redux";
import styled from "styled-components";
import { clubs } from "../res/clubs";
import { iconsImages } from "../res/iconsImages";
import CountryTableLeague from "./CountryTableLeague";
import Info from "./Info";

const ClubField = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: #bfcde0;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #d4e4f9;
  }
`;

const AllClubsField = styled.div`
  display: flex;
  margin: 5px 0px 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ClubLogoField = styled.div`
  height: 6rem;
  width: 6rem;
  margin: 1rem;
  cursor: pointer;
  display: inline-flex;
`;

const ClubLogoImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`;

const ClubName = styled.div``;

const MainWindowField = styled.div`
  display: inline-flex;
`;

const SelectClubField = styled.div`
  position: relative;
  overflow: auto;
`;

const CountryMainWindow = () => {
  const selectedCountry = useSelector(
    (state) => state.headerReducer.selectedCountry
  );
  const renderClubs = () => {
    if (selectedCountry) {
      return clubs[selectedCountry].map((club) => {
        return (
          <>
            <ClubField>
              <ClubName>{club.name}</ClubName>
              <ClubLogoField>
                <ClubLogoImage
                  src={iconsImages[club.image]}
                  alt={`${club.name} logo`}
                />
              </ClubLogoField>
            </ClubField>
          </>
        );
      });
    }
  };
  return (
    <>
      <MainWindowField>
        <SelectClubField>
          <Info text={"Wybierz drużynę"} />
          <AllClubsField>{renderClubs()}</AllClubsField>
        </SelectClubField>
        <CountryTableLeague />
      </MainWindowField>
    </>
  );
};

export default CountryMainWindow;
