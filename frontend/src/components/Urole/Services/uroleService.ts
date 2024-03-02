import { Iaddurole, Iurole } from "../Model/Iurole";
import axios from "axios";


export const getAllRoles = (): Promise<{
  data: Iurole[];
}> => {
  const dataurl = `https://developerschool-backend.onrender.com/getAllRoles`;

  return axios.get(dataurl);
};

export const getRoleById = (id: string): Promise<{ data: Iurole }> => {
  const dataurl = `https://developerschool-backend.onrender.com/getRoleBy/${id}`;
  return axios.get(dataurl);
};

export const addNewRole = async (
  body: Iaddurole
): Promise<{ data: Iurole }> => {
  const dataurl = `https://developerschool-backend.onrender.com/addrole`;

  return axios.post(dataurl, body);
};

export const updateRole = (
  updateData: Iaddurole,
  id: string
): Promise<{ data: Iaddurole[] }> => {
  const dataurl = `https://developerschool-backend.onrender.com/updaterole/${id}`;
  return axios.put(dataurl, updateData);
};

export const deleteRole = (id: string): Promise<{ data: {} }> => {
  const dataurl = `https://developerschool-backend.onrender.com/delete/${id}`;

  return axios.delete(dataurl);
};
