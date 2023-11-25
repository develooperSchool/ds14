import axios from "axios";
import { IProcessing, IUpdateProcessing } from "../Model/IProcessing";

export class Payrollprocessingservices {
  private static serverUrl: string =
    "http://localhost:4444/api/payroll-processing";

  public static getAllprocessing = (): Promise<{ data: IProcessing[] }> => {
    const data = `${this.serverUrl}/`;
    return axios.get(data);
  };

  public static getProcessingById = (
    Id: number
  ): Promise<{ data: IProcessing }> => {
    const data = `${this.serverUrl}/${Id}`;
    return axios.get(data);
  };

  public static createProcessing = (
    body: IProcessing
  ): Promise<{ data: IProcessing[] }> => {
    const data = `${this.serverUrl}/`;
    return axios.post(data, body);
  };

  public static updateProcessing = (
    updateprocess: IUpdateProcessing,
    Id: number
  ): Promise<{ data: IUpdateProcessing[] }> => {
    const data = `${this.serverUrl}/${Id}`;
    return axios.put(data, updateprocess);
  };

  public static getDelete = (Id: number): Promise<{ data: {} }> => {
    const data = `${this.serverUrl}/${Id}`;
    return axios.delete(data);
  };
}
