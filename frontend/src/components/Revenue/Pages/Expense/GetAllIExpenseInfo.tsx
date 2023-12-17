import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch, RootState } from "../../../User/Redux/store";
import { Link } from "react-router-dom";
import { usePagination } from "../../../Pagination";
import { Pagination } from "react-bootstrap";

const GetAllIExpenseInfo: React.FC = () => {
  //data from redux store
  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );

  const [search, setSearch] = useState("");

  const searchItem = revenueReduxState.Expenses.filter((item) => {
    if (search === "") {
      return item;
    } else if (
      item.expense_id.toString().includes(search) ||
      item.mentor_id.toString().includes(search) ||
      item.amount.toString().includes(search) ||
      item.revenue_category_id.toString().includes(search) ||
      item.remark.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });
  const dispatach: AppDispatch = useDispatch();
  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 5,
    totalPageRecords: revenueReduxState.Expenses.length,
  });

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
      <div>
        <div className="row">
          <div className="col">
            <Link to="/addExpense" className="btn btn-outline-info">
              Add Expense Here
            </Link>
          </div>
          <div className="col-3">
            <input
              type="text"
              placeholder="Search Here"
              className="form-control"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </div>
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
                {(searchItem.length > 0
                  ? searchItem
                  : revenueReduxState.Expenses
                )
                  .slice(startPageIndex, endPageIndex + 1)
                  .map((expenseDetails, index) => {
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
            <Pagination>
              <Pagination.First onClick={() => displayPage(1)} />
              <Pagination.Prev
                onClick={() => displayPage(currentPageIndex - 1)}
                disabled={currentPageIndex === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPageIndex}
                  onClick={() => displayPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => displayPage(currentPageIndex + 1)}
                disabled={currentPageIndex === totalPages}
              />
              <Pagination.Last onClick={() => displayPage(totalPages)} />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllIExpenseInfo;
