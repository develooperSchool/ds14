import axios from "axios";
import { IUser, IRegisterData, IRegister } from "../Model/Iuser";

export class UserService {
  private static serverUrl: string = "http://localhost:4444/api/v1/urole";
  private static DataUrl: string = "http://localhost:4444/api/v1/users";

  public static getAllUsers = async (): Promise<{ data: IRegisterData[] }> => {
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
    body: IRegister
  ): Promise<{ data: IRegisterData | any }> => {
    console.log("body", body);
    const url = `${this.DataUrl}/add`;

    axios
      .post(url, body)
      .then((res) => console.log("result", res))
      .catch((err) => console.log("err", err));

    return axios.post(url, body);
  };
}
