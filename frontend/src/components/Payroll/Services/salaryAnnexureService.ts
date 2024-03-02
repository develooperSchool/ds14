import axios from "axios";
import { SalaryAnnexure, SalaryAnnexureUpdate } from "../Model/SalaryAnnexure";

export class SalaryAnnexureService {
  private static serverUrl: string = `https://developerschool-backend.onrender.com/api/salary`;

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
