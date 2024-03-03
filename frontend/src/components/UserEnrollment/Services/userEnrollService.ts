import axios from "axios";
import { IEnroll, IEnrollData } from "../Model/IEnroll";
import { IResponse } from "../../../utils/Model/Response";
import useBackendUrl from "../../../hooks/useBackendUrl";

export class UserEnrollService {
  private static backendUrl: string =
    process.env.REACT_APP_API_URL || `http://localhost:4444`;

  private static DataUrl: string = `${this.backendUrl}/api/v1/userEnrollment`;

  public static getAllEnrollUsers = async (): Promise<{
    data: IEnrollData[];
  }> => {
    const data = `${this.DataUrl}/`;
    return axios.get(data);
  };
  public static getEnrollUserById = async (id: string): Promise<IResponse> => {
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

  public static enrollUser = async (
    body: IEnroll
  ): Promise<{ data: IEnrollData | any }> => {
    const url = `${this.DataUrl}/enroll`;
    return axios.post(url, body);
  };
  public static updateEnrollUser(
    body: IEnroll,
    id: string
  ): Promise<{ data: IEnroll[] }> {
    const data = `${this.DataUrl}/updateEnroll/${id}`;
    console.log("data", data);
    return axios.put(data, body);
  }

  public static deleteEnrollUserById = (id: string): Promise<{ data: {} }> => {
    const url = `${this.DataUrl}/delete/${id}`;

    return axios.delete(url);
  };
}
