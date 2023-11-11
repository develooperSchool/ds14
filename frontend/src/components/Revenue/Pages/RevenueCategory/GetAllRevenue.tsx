import React, { useEffect } from "react";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { Link } from "react-router-dom";

const GetAllRevenue: React.FC = () => {
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
    dispatach(RevenueAction.getAllRevenueCategoryAction());

    (res: any) => {
      if (res && !res.error) {
        dataFromserver();
      }
    };
  };

  const deleteRevenueCategory = (id: string) => {
    if (id) {
      dispatach(RevenueAction.deleteRevenueCategoryAction({ id: id })).then(
        (res: any) => {
          if (res && !res.error) {
            dataFromserver();
          }
        }
      );
    }
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <h3 className="text-success mt-3">Revenue Caregory Details</h3>
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
      <Link to="/addrevenuecategory" className="btn btn-outline-info">
        Add Category Here
      </Link>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-stripped table-hover text-center">
              <thead>
                <tr>
                  <th>Revenue Category Id</th>
                  <th>Revenue Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {revenueReduxState.Rcategories.map((categories, index) => {
                  return (
                    <tr key={categories.revenue_category_id}>
                      <td>{categories.revenue_category_id}</td>
                      <td>{categories.revenue_category_name}</td>
                      <td>
                        <Link
                          to={`/updaterevenue/${categories.revenue_category_id}`}
                          className="btn btn-outline-success"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() =>
                            deleteRevenueCategory(
                              categories.revenue_category_id
                            )
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
export default GetAllRevenue;
