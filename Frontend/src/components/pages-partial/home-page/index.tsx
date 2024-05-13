import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageGrid from "../../image-grid";
import { fetchImages } from "../../../store/image-slice";
import { ISelectorImages } from "../../../utils/interface";
import { AppDispatch } from "../../../store";

import { MatecLogo, TopBar, UploadButton } from "./styles.module";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { images, status, error } = useSelector(
    (state: ISelectorImages) => state.images
  );

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <TopBar>
        <MatecLogo>Matec</MatecLogo>
        <UploadButton onClick={() => navigate("/upload-page")}>
          Upload
        </UploadButton>
      </TopBar>
      <ImageGrid images={images} />
    </>
  );
};
