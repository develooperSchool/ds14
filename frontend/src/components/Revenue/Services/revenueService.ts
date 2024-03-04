import axios from "axios";
import {
  IAddRevenueCategory,
  IRevenueCategory,
  IIncome,
  IExpense,
  IAddExpense,
} from "../Model/IRevenue";

export class RevenueService {
  private static backendUrl: string =
    process.env.REACT_APP_API_URL ||
    `https://developerschool-backend.onrender.com`;

  private static serverUrl: string = `${this.backendUrl}/api/v1/revenue `;

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
    updateIncomeData: IAddRevenueCategory,
    id: string
  ): Promise<{ data: IAddRevenueCategory[] }> => {
    const dataurl = `${this.serverUrl}/updateRevenueCatBy/${id}`;
    return axios.put(dataurl, updateIncomeData);
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
    // const res = axios.get(dataurl);
    // console.log("Get Data", res);
    return axios.get(dataurl);
  };
  public static getIncomeInfoById = (
    incomeId: number
  ): Promise<{ data: IIncome }> => {
    const dataurl = `${this.serverUrl}/incomeInfoById/${incomeId}`;
    return axios.get(dataurl);
  };

  public static addIncomeInfo = (body: IIncome): Promise<{ data: IIncome }> => {
    const dataurl = `${this.serverUrl}/addIncome`;
    console.log("Body :", body);
    return axios.post(dataurl, body);
  };
  public static updateIncomeInfoById = (
    updateIncomeData: IIncome,
    incomeId: number
  ): Promise<{ data: IIncome[] }> => {
    const dataurl = `${this.serverUrl}/updateIncome/${incomeId}`;
    return axios.put(dataurl, updateIncomeData);
  };
  public static deleteIncomeInfoById = (
    incomeId: number
  ): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/deleteIncome/${incomeId}`;

    return axios.delete(dataurl);
  };
  //==================Income Module Services End======================================

  //==================Expense Module Services Start======================================

  public static getAllExpenseInfo = (): Promise<{
    data: IExpense[];
  }> => {
    const dataurl = `${this.serverUrl}/getAllExpense`;
    // const res = axios.get(dataurl);
    // console.log("Get Data", res);
    return axios.get(dataurl);
  };
  public static getExpenseInfoById = (
    expenseId: number
  ): Promise<{ data: IExpense }> => {
    const dataurl = `${this.serverUrl}/getExpenseById/${expenseId}`;
    return axios.get(dataurl);
  };

  public static addExpenseInfo = (
    body: IExpense
  ): Promise<{ data: IExpense }> => {
    const dataurl = `${this.serverUrl}/addExpenseInfo`;

    return axios.post(dataurl, body);
  };
  public static updateExpenseInfoById = (
    updateExpenseData: IExpense,
    expenseId: number
  ): Promise<{ data: IExpense[] }> => {
    const dataurl = `${this.serverUrl}/updateExpense/${expenseId}`;
    return axios.put(dataurl, updateExpenseData);
  };
  public static deleteExpenseInfoById = (
    expenseId: number
  ): Promise<{ data: {} }> => {
    const dataurl = `${this.serverUrl}/deleteExpense/${expenseId}`;

    return axios.delete(dataurl);
  };
  //==================Expense Module Services End======================================
}
