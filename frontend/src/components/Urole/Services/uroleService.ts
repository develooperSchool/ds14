import useBackendUrl from "../../../hooks/useBackendUrl";
import { Iaddurole, Iurole } from "../Model/Iurole";
import axios from "axios";

const backendUrl: string =
  process.env.REACT_APP_API_URL || `http://localhost:4444`;

export const getAllRoles = (): Promise<{
  data: Iurole[];
}> => {
  const dataurl = `${backendUrl}/getAllRoles`;

  return axios.get(dataurl);
};

export const getRoleById = (id: string): Promise<{ data: Iurole }> => {
  const dataurl = `${backendUrl}/getRoleBy/${id}`;
  return axios.get(dataurl);
};

export const addNewRole = async (
  body: Iaddurole
): Promise<{ data: Iurole }> => {
  const dataurl = `${backendUrl}/addrole`;

  return axios.post(dataurl, body);
};

export const updateRole = (
  updateData: Iaddurole,
  id: string
): Promise<{ data: Iaddurole[] }> => {
  const dataurl = `${backendUrl}/updaterole/${id}`;
  return axios.put(dataurl, updateData);
};

export const deleteRole = (id: string): Promise<{ data: {} }> => {
  const dataurl = `${backendUrl}/delete/${id}`;

  return axios.delete(dataurl);
};
