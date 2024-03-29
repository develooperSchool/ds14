export interface IRevenueCategory {
  revenue_category_id: string;
  revenue_category_name: string;
}

export interface IAddRevenueCategory {
  revenueCategoryName: string;
}

export interface IIncome {
  income_id: number;
  total_fees: number;
  balance_fees: number;
  paid_fees: number;
  transaction_id: number;
  income_amount: number;
  user_id: number;
  revenue_category_id: number;
}
export interface IAddIncome {
  totalFees: number;
  paidFees: number;
  balanceFees: number;
  amount: number;
  userId: number;
  transactionId: number;
  revenueCategoryId: number;
}

export interface IExpense {
  expense_id: number;
  revenue_category_id: number;
  amount: number;
  mentor_id: number;
  remark: string;
}
export interface IAddExpense {
  revenueCategoryId: number;
  amount: number;
  mentorId: number;
  remark: string;
}
