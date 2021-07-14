import styled from "styled-components";

const InfoField = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  color: white;
  text-align: center;
`;

const Info = ({ text }) => {
  return (
    <>
      <InfoField>{text}</InfoField>
    </>
  );
};

export default Info;
