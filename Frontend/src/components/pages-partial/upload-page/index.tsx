import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../../../api";

import {
  ButtonsContainer,
  FormContainer,
  MainContainer,
  PreviewImage,
  PreviewImageContainer,
  UploadButton,
  UploadText,
  VisuallyHiddenInput,
} from "./styles.module";

const UploadPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      try {
        await uploadImage(formData);
        navigate("/");
      } catch {
        console.log("Error");
      }
    }
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <PreviewImageContainer>
            {image ? (
              <PreviewImage src={URL.createObjectURL(image)} alt="" />
            ) : (
              <UploadText>Please upload an image</UploadText>
            )}
          </PreviewImageContainer>
          <ButtonsContainer>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>

            {image && <UploadButton type="submit">Submit</UploadButton>}
          </ButtonsContainer>
        </FormContainer>
      </form>
    </MainContainer>
  );
};

export default UploadPage;
