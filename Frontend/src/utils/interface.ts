export interface ImagesState {
  images: IGetAllImages[];
  status: string;
  error: string;
}

export interface ISelectorImages {
  images: ImagesState;
}

export interface IGetAllImages {
  id: "string";
  filename: "string";
  path: "string";
}
