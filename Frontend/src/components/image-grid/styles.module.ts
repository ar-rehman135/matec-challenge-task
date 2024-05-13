import { Button, Paper } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const ImagePaper = styled(Paper)`
  text-align: center;
  border-radius: 10px !important;
  overflow: hidden;
  width: fit-content;
`;

export const GridImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

export const ViewButton = styled(Button)`
  color: black !important;
  font-weight: 700 !important;
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  color: black !important;
  font-weight: 700 !important;
  cursor: pointer;
`;

export const ActionButtons = styled.div``;
