import axios from "axios";
import { DogModel } from "../models/DogModel";
import globals from "./Globals";

export const addDog = async (dog: DogModel) => {
  return await axios.post<any>(`${globals.urls.dogs}`, dog);
};

export const updateDog = async (dog: DogModel, id: number) => {
  return await axios.put<any>(`${globals.urls.dogs}/${id}`, dog);
};

export const deleteDog = async (id: number) => {
  return await axios.delete<any>(`${globals.urls.dogs}/${id}`);
};

export const getAllDogs = async () => {
  return await axios.get<DogModel[]>(`${globals.urls.dogs}`);
};

export const getDog = async (id: number) => {
    return await axios.get<DogModel>(`${globals.urls.dogs}/${id}`)
}