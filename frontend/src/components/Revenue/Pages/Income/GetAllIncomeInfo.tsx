import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch, RootState } from "../../../User/Redux/store";
import { Link } from "react-router-dom";

const GetAllIncomeInfo: React.FC = () => {
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
    dispatach(RevenueAction.getAllIncomeInfoAction());
  };
  const deleteIncomeInfoById = (incomeId: number) => {
    if (incomeId) {
      dispatach(
        RevenueAction.deleteIncomeInfoByIdAction({ incomeId: incomeId })
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
            <h3 className="text-success mt-3">Income Details</h3>
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
      <Link to="/addIncome" className="btn btn-outline-info">
        Add Income Details
      </Link>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-stripped table-hover text-center">
              <thead>
                <tr>
                  <th>Income ID</th>
                  <th>User ID</th>
                  <th>Revenue ID</th>
                  <th>Total Fees</th>
                  <th>Paid Fees</th>
                  <th>Balance Fees</th>
                  <th>Transaction ID</th>
                  <th>Income Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {revenueReduxState.Incomes.map((incomeDetails, index) => {
                  return (
                    <tr>
                      <td>{incomeDetails.income_id}</td>

                      <td>{incomeDetails.user_id}</td>
                      <td>{incomeDetails.revenue_category_id}</td>
                      <td>{incomeDetails.total_fees}</td>
                      <td>{incomeDetails.paid_fees}</td>
                      <td>{incomeDetails.balance_fees}</td>
                      <td>{incomeDetails.transaction_id}</td>
                      <td>{incomeDetails.income_amount}</td>
                      <td>
                        <Link
                          to={`/updateIncome/${incomeDetails.income_id}`}
                          className="btn btn-outline-success"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() =>
                            deleteIncomeInfoById(incomeDetails.income_id)
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
export default GetAllIncomeInfo;
