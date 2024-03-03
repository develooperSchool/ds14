import axios from "axios";
import { SalaryAnnexure, SalaryAnnexureUpdate } from "../Model/SalaryAnnexure";

export class SalaryAnnexureService {
  private static backendUrl: string =
    process.env.REACT_APP_API_URL || `http://localhost:4444`;
  private static serverUrl: string = `${this.backendUrl}/api/salary`;

  public static fetchSalaryAnnexures = (): Promise<{
    data: SalaryAnnexure[];
  }> => {
    const dataurl = `${this.serverUrl}/`;

    return axios.get(dataurl);
  };

  public static getSalaryAnnexureById = (
    Id: number
  ): Promise<{ data: SalaryAnnexure }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    return axios.get(dataurl);
  };

  public static addSalaryAnnexure = (
    body: SalaryAnnexure
  ): Promise<{ data: SalaryAnnexure[] }> => {
    const dataurl = `${this.serverUrl}/`;
    return axios.post(dataurl, body);
  };

  public static updateSalaryAnnexure = (
    updatesalaryannexure: SalaryAnnexureUpdate,
    Id: number
  ): Promise<{ data: SalaryAnnexureUpdate[] }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    return axios.put(dataurl, updatesalaryannexure);
  };

  public static deleteSalaryAnnexure = (Id: number): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    let res = axios.delete(dataurl);
    console.log(res);
    return res;
  };
}
