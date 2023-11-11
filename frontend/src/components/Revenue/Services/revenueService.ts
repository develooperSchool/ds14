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
    id: string
  ): Promise<{ data: IRevenueCategory }> => {
    const dataurl = `${this.serverUrl}/getRevenueCatById/${id}`;
    return axios.get(dataurl);
  };

  public static addRevenueCategory = (
    body: IRevenueCategory
  ): Promise<{ data: IRevenueCategory }> => {
    const dataurl = `${this.serverUrl}/addRevenueCategorydetails`;
    return axios.post(dataurl, body);
  };

  public static updateRevenueCategory = (
    updatrevcategory: IRevenueCategory,
    id: string
  ): Promise<{ data: IRevenueCategory[] }> => {
    const dataurl = `${this.serverUrl}/updateRevenueCatBy/${id}`;
    return axios.put(dataurl, updatrevcategory);
  };

  public static deleteRevenueCategory = (id: string): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/deleteRevenueCategory/${id}`;
    return axios.delete(dataurl);
  };
}
