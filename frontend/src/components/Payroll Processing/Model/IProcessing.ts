export interface IProcessing {
  payroll_id?: number;
  user_id: number;
  payroll_date: string;
  gross_salary: number;
  net_salary: number;
}

export interface IUpdateProcessing {
  user_id?: number;
  payroll_date: string;
  gross_salary: number;
  net_salary: number;
}
