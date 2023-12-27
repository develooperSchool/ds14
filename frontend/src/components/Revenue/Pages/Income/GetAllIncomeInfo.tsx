import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch, RootState } from "../../../User/Redux/store";
import { Link } from "react-router-dom";
import { usePagination } from "../../../Pagination";
import { Pagination } from "react-bootstrap";

const GetAllIncomeInfo: React.FC = () => {
  //data from redux store
  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );

  const [search, setSearch] = useState("");

  const searchItem = revenueReduxState.Incomes.filter((item) => {
    if (search === "") {
      return item;
    } else if (
      item.income_id.toString().includes(search.toLowerCase()) ||
      item.user_id.toString().includes(search.toLowerCase()) ||
      item.revenue_category_id.toString().includes(search.toLowerCase()) ||
      item.total_fees.toString().includes(search.toLowerCase()) ||
      item.paid_fees.toString().includes(search.toLowerCase()) ||
      item.balance_fees.toString().includes(search.toLowerCase()) ||
      item.transaction_id.toString().includes(search.toLowerCase()) ||
      item.income_amount.toString().includes(search.toLowerCase())
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
    totalPageRecords: revenueReduxState.Incomes.length,
  });

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

        <div>
          <div className="row">
            <div className="col">
              <h5>Below we have Income Deatails</h5>
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-stripped table-hover text-center">
              <thead>
                <tr>
                  {/* <th>Income ID</th> */}
                  <th>User ID</th>
                  <th>Revenue ID</th>
                  <th>Total Fees</th>
                  <th>Paid Fees</th>
                  <th>Balance Fees</th>
                  <th>Transaction ID</th>
                  {/* <th>Income Amount</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(searchItem.length > 0
                  ? searchItem
                  : revenueReduxState.Incomes
                )
                  .slice(startPageIndex, endPageIndex + 1)
                  .map((incomeDetails, index) => {
                    return (
                      <tr>
                        {/* <td>{incomeDetails.income_id}</td> */}

                        <td>{incomeDetails.user_id}</td>
                        <td>{incomeDetails.revenue_category_id}</td>
                        <td>{incomeDetails.total_fees}</td>
                        <td>{incomeDetails.paid_fees}</td>
                        <td>{incomeDetails.balance_fees}</td>
                        <td>{incomeDetails.transaction_id}</td>
                        {/* <td>{incomeDetails.income_amount}</td> */}
                        <td>
                          {/* <Link
                            to={`/updateIncome/${incomeDetails.income_id}`}
                            className="btn btn-outline-success"
                          >
                            Update
                          </Link> */}
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
export default GetAllIncomeInfo;
