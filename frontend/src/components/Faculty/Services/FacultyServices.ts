import axios from "axios";
import { IFACULTY, ISUBJECTS, IUSER, IUSERBYID } from "../Model/Ifaculty";
export class facultyServices {
  private static serverUrl: string = `https://developerschool-backend.onrender.com/api/v1/faculty2`;
  public static getAllFacultyData = (): Promise<{ data: IUSER[] }> => {
    const data = `${this.serverUrl}/get`;
    return axios.get(data);
  };

  public static getAllFaculty = (): Promise<{ data: IUSERBYID[] }> => {
    const data = `${this.serverUrl}/getFaculty`;
    return axios.get(data);
  };

  public static getAllSubjects = (): Promise<{ data: ISUBJECTS[] }> => {
    const data = `https://developerschool-backend.onrender.com/api/v1/subjects/get`;
    return axios.get(data);
  };

  public static getFacultyDataById = (
    Id: string
  ): Promise<{ data: IUSERBYID[] | any }> => {
    const data = `https://developerschool-backend.onrender.com/api/v1/users/${Id}`;
    return axios.get(data);
  };

  public static assignFaculty = (obj: IFACULTY): Promise<{ data: any }> => {
    const data = `${this.serverUrl}/post`;
    return axios.post(data, obj);
  };

  public static DeleteFacultyById = (
    Id: string
  ): Promise<{ data: IFACULTY }> => {
    const data = `${this.serverUrl}/delete/${Id}`;
    return axios.delete(data);
  };
}
