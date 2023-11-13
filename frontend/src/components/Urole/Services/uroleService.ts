import { Iurole } from "../Model/Iurole";
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
        const dataurl = `${this.serverUrl}/getRoleById/${id}`;
        return axios.get(dataurl);
      };
    
      public static addNewRole = async (
        body: Iurole
      ): Promise<{ data: Iurole }> => {
        const dataurl = `${this.serverUrl}/`;
    
        return axios.post(dataurl, body);
      };
    
      public static updateRole= (
        updatrevcategory: Iurole,
        id: string
      ): Promise<{ data: Iurole[] }> => {
        const dataurl = `${this.serverUrl}/updateRoleBy/${id}`;
        console.log(dataurl);
        return axios.put(dataurl, updatrevcategory);
      };
    
      public static deleteRole = (id: string): Promise<{ data: {} }> => {
        const dataurl = `${this.serverUrl}/delete/${id}`;
    
        return axios.delete(dataurl);
      };
}