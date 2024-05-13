import { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";

import { EnlargedImage } from "../enlarged-image";
import { IGetAllImages } from "../../utils/interface";
import { AppDispatch } from "../../store";
import { fetchImages } from "../../store/image-slice";
import { API_URL, deleteImage } from "../../api";

import {
  ActionButtons,
  DeleteButton,
  GridImage,
  ImagePaper,
  MainContainer,
  ViewButton,
} from "./styles.module";

function ImageGrid({ images }: { images: IGetAllImages[] }) {
  const [viewImage, setViewImage] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (path: string) => {
    const choice = window.confirm(`Are you sure you want to delete ${path}`);
    if (choice) {
      deleteImage(path);
      dispatch(fetchImages());
    }
  };
  return (
    <>
      {viewImage && (
        <EnlargedImage imageUrl={viewImage} onClose={setViewImage} />
      )}
      <MainContainer>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ maxWidth: "fit-content !important" }}
            >
              <ImagePaper>
                <GridImage
                  src={`${API_URL}${image.path.split("uploads")[1]}`}
                  alt={`Image ${index}`}
                />
                <ActionButtons>
                  <ViewButton
                    onClick={() =>
                      setViewImage(
                        `${API_URL}/${image.path.split("uploads")[1]}`
                      )
                    }
                  >
                    View
                  </ViewButton>
                  <DeleteButton onClick={() => handleDelete(image.id)}>
                    Delete
                  </DeleteButton>
                </ActionButtons>
              </ImagePaper>
            </Grid>
          ))}
        </Grid>
      </MainContainer>
    </>
  );
}

export default ImageGrid;
