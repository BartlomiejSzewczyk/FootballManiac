import { useSelector } from "react-redux";
import styled from "styled-components";
import { clubs } from "../res/clubs";
import { iconsImages } from "../res/iconsImages";

const Info = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  color: white;
  text-align: center;
`;

const ClubField = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: #bfcde0;
  cursor: pointer;
  text-align: center;
`;

const AllClubsField = styled.div`
  display: flex;
  margin: 5px 0px 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ClubLogoField = styled.div`
  width: 10rem;
  margin: 1rem;
  cursor: pointer;
`;

const ClubLogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ClubName = styled.div``;

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
      <Info>Wybierz drużynę</Info>
      <AllClubsField>{renderClubs()}</AllClubsField>
    </>
  );
};

export default CountryMainWindow;
