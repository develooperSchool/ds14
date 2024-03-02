import axios from "axios";
import dotenv from "dotenv";
import {
  IUser,
  IRegisterData,
  IRegister,
  IUpdate,
  IDeactive,
  IUpdateRequest,
} from "../Model/Iuser";
import { IResponse } from "../../../utils/Model/Response";

// dotenv.config();

export class UserService {
  private static serverUrl: string = `https://developerschool-backend.onrender.com/api/v1/urole`;
  // private static serverUrl: string = `http://localhost:4444/api/v1/urole`;
  private static DataUrl: string = `https://developerschool-backend.onrender.com/api/v1/users`;

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
    console.log(dataurl, body);
    return axios.post(dataurl, body);
  };

  public static getUserById = async (id: string): Promise<IResponse> => {
    //
    let response: IResponse = {
      message: "",
      statusCode: 0,
      description: "",
      body: [],
      timeStamp: "",
    };
    const url = `${this.DataUrl}/${id}`;
    await axios
      .get(url)
      .then((res) => (response = res.data))
      .catch((err) => console.log(err));

    return response;
  };

  public static createUser = async (
    body: IRegister
  ): Promise<{ data: IRegisterData | any }> => {
    const url = `${this.DataUrl}/add`;
    return axios.post(url, body);
  };

  public static logout = () => {
    localStorage.removeItem("userData");
  };

  public static updateUser(
    body: IUpdateRequest,
    id: string
  ): Promise<{ data: IUpdate[] }> {
    const data = `${this.serverUrl}/updateuser/${id}`;
    return axios.put(data, body);
  }

  public static async deactiveUser(id: string): Promise<{ data: IResponse }> {
    const data = `${this.DataUrl}/deactivate/${id}`;
    await axios
      .put(data)
      .then((response) => console.log("reponse", response))
      .catch((err) => console.log("error", err));
    return axios.put(data);
  }

  public static getAllActiveUsers = async (): Promise<{
    data: IResponse[];
  }> => {
    const data = `${this.DataUrl}/isActive`;
    return axios.get(data);
  };
}
