import styled from "styled-components";
import BallIcon from "../icons/BallIcon";

const LogoField = styled.div`
  font-size: 1.3rem;
  font-style: italic;
  align-self: center;
  padding: 1rem;
  border-right: 2px solid white;
  color: white;
  display: flex;
`;

const WebSiteTitle = styled.div``;

const IconField = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  align-self: center;
  margin-left: 1rem;
`;

const Logo = () => {
  return (
    <>
      <LogoField>
        <div>Football Maniac</div>
        <IconField>
          <BallIcon />
        </IconField>
      </LogoField>
    </>
  );
};

export default Logo;
