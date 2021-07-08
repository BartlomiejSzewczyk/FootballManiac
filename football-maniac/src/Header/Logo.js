import styled from "styled-components";

const LogoField = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  align-self: center;
  padding: 1rem;
`;

const Logo = () => {
  return (
    <>
      <LogoField>Football Maniac</LogoField>
    </>
  );
};

export default Logo;
