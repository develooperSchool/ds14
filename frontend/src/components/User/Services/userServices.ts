import axios from "axios";
import { IUser, Iregister } from "../Model/Iuser";

export class UserService {
  private static serverUrl: string = "http://localhost:4444/api/v1/urole";
  private static DataUrl: string = "http://localhost:4444/api/v1/user";

  

  public static userLogin = (): Promise<{
    data: IUser[];
  }> => {
    const dataurl = `${this.serverUrl}/userlogin`;
    return axios.post(dataurl);
  };

  public static createUser = (body:Iregister):Promise<{data:Iregister[]}>=>{
    const data = `${this.DataUrl}/`
    return axios.post(data,body)
}
}
