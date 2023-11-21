import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch, RootState } from "../../../User/Redux/store";
import { Link } from "react-router-dom";

const GetAllIExpenseInfo: React.FC = () => {
  //data from redux store
  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );
  const dispatach: AppDispatch = useDispatch();

  useEffect(() => {
    dataFromserver();
  }, []);

  const dataFromserver = () => {
    dispatach(RevenueAction.getAllExpenseInfoAction());
  };
  const deleteExpenseInfoById = (expenseId: number) => {
    if (expenseId) {
      dispatach(
        RevenueAction.deleteExpenseInfoByIdAction({ expenseId: expenseId })
      ).then((res: any) => {
        if (res && !res.error) {
          dataFromserver();
        }
      });
    }
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <h3 className="text-success mt-3">Expense Details</h3>
            <p className="fst-italic text-justify">
              Revenue, also called income, is the amount of money brought into
              the company, typically by selling goods, products, or services.
              Sometimes, revenue is equated to profits, but that correlation is
              inaccurate. Instead, it is best to think of revenue as sales: how
              much money the company brings in by selling goods, products, or
              services.
            </p>
          </div>
        </div>
      </div>
      <Link to="/addExpense" className="btn btn-outline-info">
        Add Expense Details
      </Link>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-stripped table-hover text-center">
              <thead>
                <tr>
                  <th>Expense ID</th>
                  <th> Mentor ID</th>
                  <th>Revenue Cateegory ID</th>
                  <th>Expense Amount</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {revenueReduxState.Expenses.map((expenseDetails, index) => {
                  return (
                    <tr>
                      <td>{expenseDetails.expense_id}</td>

                      <td>{expenseDetails.mentor_id}</td>
                      <td>{expenseDetails.revenue_category_id}</td>
                      <td>{expenseDetails.amount}</td>
                      <td>{expenseDetails.remark}</td>
                      <td>
                        <Link
                          to={`/updateExpense/${expenseDetails.expense_id}`}
                          className="btn btn-outline-success"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() =>
                            deleteExpenseInfoById(expenseDetails.expense_id)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllIExpenseInfo;
