import axios from "axios";
import { IRevenueCategory } from "../Model/IRevenue";

export class RevenueService {
  private static serverUrl: string = "http://localhost:4444/api/v1/revenue";

  public static getAllRevenueCategory = (): Promise<{
    data: IRevenueCategory[];
  }> => {
    const dataurl = `${this.serverUrl}/getAllrevenueCategory`;

    return axios.get(dataurl);
  };

  public static getRevenueCategoryById = (
    Id: string
  ): Promise<{ data: IRevenueCategory }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    return axios.get(dataurl);
  };

  public static addRevenueCategory = (
    body: IRevenueCategory
  ): Promise<{ data: IRevenueCategory }> => {
    const dataurl = `${this.serverUrl}/`;
    return axios.post(dataurl, body);
  };

  public static updateRevenueCategory = (
    updatrevcategory: IRevenueCategory,
    Id: string
  ): Promise<{ data: IRevenueCategory[] }> => {
    const dataurl = `${this.serverUrl}/${Id}`;
    return axios.put(dataurl, updatrevcategory);
  };

  public static deleteRevenueCategory = (Id: string): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/deleteRevenueCategory/id/${Id}`;
    let res = axios.delete(dataurl);

    console.log(res);
    return res;
  };
}
