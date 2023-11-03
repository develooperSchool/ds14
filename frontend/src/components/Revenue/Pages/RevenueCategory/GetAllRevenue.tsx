import React, { useEffect } from "react";
import * as RevenueReducer from "../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../Redux/RevenueRedux/revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";

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
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <h3 className="text-success mt-3">Revenue Details</h3>
        <p className="fst-italic text-justify">
          Revenue, also called income, is the amount of money brought into the
          company, typically by selling goods, products, or services. Sometimes,
          revenue is equated to profits, but that correlation is inaccurate.
          Instead, it is best to think of revenue as sales: how much money the
          company brings in by selling goods, products, or services.
        </p>
      </div>
    </>
  );
};

export default GetAllRevenue;
