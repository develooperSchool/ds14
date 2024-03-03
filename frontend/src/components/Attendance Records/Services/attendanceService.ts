import axios from "axios";
import { IAttendance, IUpdateAttendance } from "../Model/IAttendance";

export class AttendanceService {
  private static backendUrl: string =
    process.env.REACT_APP_API_URL || `http://localhost:4444`;

  private static serverUrl: string = `${this.backendUrl}/api/attendance-records`;

  public static getAllAttendance = (): Promise<{
    data: IAttendance[];
  }> => {
    const dataurl = `${this.serverUrl}/`;

    return axios.get(dataurl);
  };

  public static getAttendanceById = (
    Id: string
  ): Promise<{ data: IAttendance }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    return axios.get(dataurl);
  };

  public static addAttendance = (
    body: IAttendance
  ): Promise<{ data: IAttendance[] }> => {
    const dataurl = `${this.serverUrl}/`;
    return axios.post(dataurl, body);
  };

  public static updateAttendance = (
    updateAttendance: IUpdateAttendance,
    Id: number
  ): Promise<{ data: IUpdateAttendance[] }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    return axios.put(dataurl, updateAttendance);
  };

  public static deleteAttendance = (Id: string): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    let res = axios.delete(dataurl);
    console.log(res);
    return res;
  };
}
