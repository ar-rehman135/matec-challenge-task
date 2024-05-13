import axios from "axios";
import { IGetAllImages } from "../utils/interface";

export const API_URL = import.meta.env.VITE_API_URL;

export const getImages = async () => {
  const response = await axios.get<IGetAllImages[]>(`${API_URL}api/images/all`);
  return response.data;
};

export const deleteImage = async (id: string) => {
  const response = await axios.delete<IGetAllImages[]>(
    `${API_URL}api/images/${id}`
  );
  return response.data;
};

export const uploadImage = async (file: FormData) => {
  const response = await axios.post(`${API_URL}api/images/upload`, file);
  return response;
};
