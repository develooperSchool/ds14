import axios from "axios";
import {
  IAddRevenueCategory,
  IRevenueCategory,
  IIncome,
} from "../Model/IRevenue";

export class RevenueService {
  private static serverUrl: string = "http://localhost:4444/api/v1/revenue";

  // =================Revenue Module Services Start ======================================

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

  public static addRevenueCategory = async (
    body: IRevenueCategory
  ): Promise<{ data: IRevenueCategory }> => {
    const dataurl = `${this.serverUrl}/addRevenueCategorydetails`;

    return axios.post(dataurl, body);
  };

  public static updateRevenueCategory = (
    updateData: IAddRevenueCategory,
    id: string
  ): Promise<{ data: IAddRevenueCategory[] }> => {
    const dataurl = `${this.serverUrl}/updateRevenueCatBy/${id}`;
    return axios.put(dataurl, updateData);
  };

  public static deleteRevenueCategory = (id: string): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/deleteRevenueCategory/${id}`;

    return axios.delete(dataurl);
  };

  // =================Revenue Module Services End ======================================

  //==================Income Module Services Start======================================

  public static getAllIncomeInfo = (): Promise<{
    data: IIncome[];
  }> => {
    const dataurl = `${this.serverUrl}/incomeInfo`;
    const res = axios.get(dataurl);
    console.log("Get Data", res);
    return axios.get(dataurl);
  };
  public static getIncomeInfoById = (
    incomeId: number
  ): Promise<{ data: IIncome }> => {
    const dataurl = `${this.serverUrl}/getInfoById/${incomeId}`;
    return axios.get(dataurl);
  };

  public static addIncomeInfo = (body: IIncome): Promise<{ data: IIncome }> => {
    const dataurl = `${this.serverUrl}/addIncome`;

    return axios.post(dataurl, body);
  };
  public static updateIncomeInfoById = (
    updateData: IIncome,
    incomeId: number
  ): Promise<{ data: IIncome[] }> => {
    const dataurl = `${this.serverUrl}/updateIncome/${incomeId}`;
    return axios.put(dataurl, updateData);
  };
  public static deleteIncomeInfoById = (
    incomeId: number
  ): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/deleteIncome/${incomeId}`;

    return axios.delete(dataurl);
  };
  //==================Income Module Services End======================================
}
