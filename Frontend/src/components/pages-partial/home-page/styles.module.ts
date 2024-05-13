import styled from "styled-components";

export const TopBar = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justif-content: flex-start;
  align-items: start;
  @media (max-width: 550px) {
    align-items: center;
  }
`;

export const UploadButton = styled.button`
  margin-left: 20px;
  width: 300px;
  height: 50px;
  font-size: 30px !important;
  font-weight: 700;
  border-radius: 50px;
  color: rgb(0, 49, 63);
  font-size: 20px;
  background-color: white;
  border: 1px solid white;
  cursor: pointer;
  @media (max-width: 550px) {
    width: 90%;
    margin: auto;
  }
`;

export const MatecLogo = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 700;
  margin: 30px;
`;
