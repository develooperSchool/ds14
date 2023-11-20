import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../Redux/store";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IAddIncome, IIncome } from "../../Model/IRevenue";

const UpdateIncomeInfoById: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );
  const { Income } = revenueReduxState;
  const { incomeId } = useParams();

  const [createIncome, setCreateIncome] = useState<IIncome>({
    income_id: 0,
    total_fees: 0,
    balance_fees: 0,
    paid_fees: 0,
    transaction_id: 0,
    income_amount: 0,
    user_id: 0,
    revenue_category_id: 0,
  });

  useEffect(() => {
    if (incomeId) {
      dataFromServer(Number(incomeId));
    }
  }, [incomeId]);

  useEffect(() => {
    if (Income && Object.keys(Income).length > 0) {
      setCreateIncome({
        ...createIncome,
        income_id: Income.income_id,
        total_fees: Income.total_fees,
        balance_fees: Income.balance_fees,
        paid_fees: Income.paid_fees,
        transaction_id: Income.transaction_id,
        income_amount: Income.income_amount,
        user_id: Income.income_amount,
        revenue_category_id: Income.income_id,
      });
    }
  }, [Income]);

  const dataFromServer = (IncomeId: number) => {
    dispatch(RevenueAction.getIncomeInfoByIdAction({ IncomeId: IncomeId }));
  };
  const Navigate = useNavigate();

  const changeInputEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCreateIncome({
      ...createIncome,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // alert("Revenue Added Successfully");

    let updateData: IAddIncome = {
      paidFees: createIncome.paid_fees,
    };

    dispatch(
      RevenueAction.updateRevenueCategoryAction({
        updateData,
        incomeId,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        Navigate("/getrevenue");
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Update Fees Here...</div>
            <div className="p fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nostrum amet facilis reiciendis aperiam ducimus consequuntur,
              commodi laboriosam architecto doloribus, repellendus, ab
              aspernatur adipisci numquam fugit velit omnis eaque ipsa. Ullam,
              consequatur et quaerat amet eos accusamus pariatur? Accusamus,
              amet. Voluptatem quasi voluptatibus dolores. Facere odio sint
              numquam tempore exercitationem earum, alias eaque ut porro
              laudantium deleniti corporis repellat nulla eveniet nihil
              obcaecati quas soluta dolorum asperiores in ex aliquid possimus
              error voluptate! Quaerat incidunt voluptatem,
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-3">
              <div className="card-header bg-warning ">
                <h3>Update Paid Fees</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">Enter Paid Fees</label>
                  <input
                    type="text"
                    name="paid_fees"
                    value={createIncome.paid_fees}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Paid Fees"
                  />
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn btn-outline-success">
                    Submit
                  </button>

                  <button type="reset" className="btn btn-outline-danger">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateIncomeInfoById;
