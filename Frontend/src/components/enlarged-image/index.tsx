import {
  BlurBackround,
  IconContainer,
  ImageModal,
  ImageModalContainer,
} from "./styles.module";
import CloseIcon from "@mui/icons-material/Close";

interface IEnlarged {
  imageUrl: string;
  onClose: React.Dispatch<React.SetStateAction<string>>;
}

export const EnlargedImage = ({ imageUrl, onClose }: IEnlarged) => {
  return (
    <>
      <BlurBackround></BlurBackround>
      <ImageModalContainer>
        <IconContainer>
          <CloseIcon
            onClick={() => onClose("")}
            style={{ color: "white", cursor: "pointer", marginRight: "-30px" }}
          />
        </IconContainer>
        <ImageModal src={imageUrl} alt="view" />
      </ImageModalContainer>
    </>
  );
};
