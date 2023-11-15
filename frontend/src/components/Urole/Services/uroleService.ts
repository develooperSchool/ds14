import { Iaddurole, Iurole } from "../Model/Iurole";
import axios from "axios";


export class UroleService{
    private static serverUrl: string = "http://localhost:4444/api/v1/urole";

    public static getAllRoles = (): Promise<{
        data: Iurole[];
      }> => {
        const dataurl = `${this.serverUrl}/getAllRoles`;
    
        return axios.get(dataurl);
      };

      public static getRoleById = (
        id: string
      ): Promise<{ data: Iurole }> => {
        const dataurl = `${this.serverUrl}/getRoleBy/${id}`;
        return axios.get(dataurl);
      };
    
      public static addNewRole = async (
        body: Iaddurole
      ): Promise<{ data: Iurole }> => {
        const dataurl = `${this.serverUrl}/addrole`;
    
        return axios.post(dataurl, body);
      };
    
      public static updateRole = (
        updateData: Iaddurole,
        id: string
      ): Promise<{ data: Iaddurole[] }> => {
        const dataurl = `${this.serverUrl}/updaterole/${id}`;
        return axios.put(dataurl, updateData);
      };
    
      public static deleteRole = (id: string): Promise<{ data: {} }> => {
        const dataurl = `${this.serverUrl}/delete/${id}`;
    
        return axios.delete(dataurl);
      };
}