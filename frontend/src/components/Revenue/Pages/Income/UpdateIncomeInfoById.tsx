import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../Redux/store";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IAddIncome, IIncome } from "../../Model/IRevenue";
import { eventNames } from "process";

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
        paid_fees: Income.balance_fees,
        transaction_id: Income.transaction_id,
        income_amount: Income.income_amount,
        user_id: Income.user_id,
        revenue_category_id: Income.revenue_category_id,
      });
    }
  }, [Income]);

  const dataFromServer = (incomeId: number) => {
    dispatch(RevenueAction.getIncomeInfoByIdAction({ incomeId: incomeId }));
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

    let updateIncomeData: IAddIncome = {
      totalFees: createIncome.total_fees,
      paidFees: createIncome.paid_fees,
      balanceFees: createIncome.balance_fees - createIncome.paid_fees,
      amount: createIncome.income_amount + createIncome.paid_fees,
      userId: createIncome.user_id,
      transactionId: createIncome.transaction_id,
      revenueCategoryId: createIncome.revenue_category_id,
    };

    alert(JSON.stringify(updateIncomeData));

    dispatch(
      RevenueAction.updateIncomeInfoByIdAction({
        updateIncomeData,
        incomeId,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        Navigate("/getIncome");
      }
    });
  };

  const validatePaidFees = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    if (Income.balance_fees < Number(event.target.value)) {
      alert("Amount cannot exceed Balance Fees !");
      setCreateIncome({
        ...createIncome,
        paid_fees: createIncome.balance_fees,
      });
    }
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
                  <label className="form-label">Your Total Course Fee</label>
                  <input
                    type="text"
                    name="total_fees"
                    value={createIncome.total_fees}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Paid Fees"
                    disabled
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Your Total Balance Fee</label>
                  <input
                    type="text"
                    name="balance_fees"
                    value={createIncome.balance_fees}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Paid Fees"
                    disabled
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Enter Fee which you paying now
                  </label>
                  <input
                    type="text"
                    name="paid_fees"
                    value={createIncome.paid_fees}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    onBlur={(e) => validatePaidFees(e)}
                    className="form-control"
                    placeholder="Enter Fee here"
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
