import axios from "axios";
import { IC, ICOURSES, IPURCHASE } from "../Model/Icourses";
import { IUSERBYID } from "../../Faculty/Model/Ifaculty";
import { json } from "stream/consumers";

export class Courseservices {
  private static backendUrl: string =
    process.env.REACT_APP_API_URL || `http://localhost:4444`;

  private static serverUrl: string = `${this.backendUrl}/api/v1/course2`;
  public static getAllCourses = (): Promise<{ data: ICOURSES[] }> => {
    const data = `${this.serverUrl}/get`;
    return axios.get(data);
  };

  public static getCoursesById = (Id: string): Promise<{ data: ICOURSES }> => {
    const data = `${this.serverUrl}/getById/${Id}`;
    return axios.get(data);
  };

  public static getPurchasedCoursesById = (
    Id: string
  ): Promise<{ data: IPURCHASE[] }> => {
    const data = `${this.backendUrl}/enrollment/getDataById/${Id}`;
    return axios.get(data);
  };

  public static updateUserRole = (
    id: string,
    roleId: string
  ): Promise<{ data: IUSERBYID | any }> => {
    let body: {} = { roleId };
    console.log(body);
    const url = `${this.backendUrl}/api/v1/users/updateRole/${id}`;
    return axios.put(url, body);
  };

  public static createCourses = (obj: IC): Promise<{ data: ICOURSES }> => {
    const data = `${this.serverUrl}/post`;
    return axios.post(data, obj);
  };

  public static updateCourseById = (
    Id: string,
    Body: IC
  ): Promise<{ data: ICOURSES }> => {
    const data = `${this.serverUrl}/update/${Id}`;

    return axios.put(data, Body);
  };

  public static DeleteCourseById = (
    Id: string
  ): Promise<{ data: ICOURSES }> => {
    const data = `${this.serverUrl}/delete/${Id}`;
    return axios.delete(data);
  };
}
