import axios from "axios";
import { IEnroll, IEnrollData } from "../Model/IEnroll";
import { IResponse } from "../../../utils/Model/Response";

export class UserEnrollService {
  private static DataUrl: string =
    "http://localhost:4444/api/v1/userEnrollment";

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
}
