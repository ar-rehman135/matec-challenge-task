import styled from "styled-components";

export const BlurBackround = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const ImageModal = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 80vh;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ImageModalContainer = styled.div`
  position: absolute;
  max-width: 80%;
  width: max-content;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
