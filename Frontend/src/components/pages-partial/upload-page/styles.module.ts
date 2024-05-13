import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgb(16, 85, 105), rgb(0, 49, 63));
`;

export const FormContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed black;
  border-radius: 10px;
  max-width: 95vw;
  gap: 30px;
  margin: auto;
  padding: 30px;
`;

export const UploadButton = styled.button`
  width: 115px;
  height: 36px;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  background-color: #1976d2;
  cursor: pointer;
  border: none;
`;

export const PreviewImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 80vh;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: auto;
`;

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const UploadText = styled.h1`
  white-space: nowrap;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
