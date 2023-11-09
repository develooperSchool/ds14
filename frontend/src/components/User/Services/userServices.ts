import axios from "axios";
import { IUser, Iregister } from "../Model/Iuser";

export class UserService {
  private static serverUrl: string = "http://localhost:4444/api/v1/urole";
  private static DataUrl: string = "http://localhost:4444/api/v1/users";

  public static getAllUsers = async (): Promise<{ data: Iregister[] }> => {
    const data = `${this.DataUrl}/`;
    return axios.get(data);
  };

  public static userLogin = (
    body: IUser
  ): Promise<{
    data: IUser;
  }> => {
    const dataurl = `${this.serverUrl}/userlogin`;
    return axios.post(dataurl);
  };

  public static createUser = async (
    body: Iregister
  ): Promise<{ data: Iregister | any }> => {
    console.log("body", body);
    let res: Iregister | any = {};
    const url = `${this.DataUrl}/add`;
    return axios.post(url, body);
  };
}
