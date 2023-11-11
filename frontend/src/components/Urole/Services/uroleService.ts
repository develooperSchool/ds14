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
}