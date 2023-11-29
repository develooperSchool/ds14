import React, { useState } from "react";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch } from "../../../../Redux/store";
import { useDispatch } from "react-redux";
import { IAddExpense, IExpense } from "../../Model/IRevenue";
import { useNavigate } from "react-router-dom";

const AddExpenseInfo = () => {
  const Navigate = useNavigate();
  //data from redux store
  // const revenueReduxState: RevenueReducer.InitialState = useSelector(
  //   (state: RootState) => {
  //     return state[RevenueReducer.revenueFeatureKey];
  //   }
  // );
  const dispatch: AppDispatch = useDispatch();

  const [createExpense, setCreateExpense] = useState<IAddExpense>({
    revenueCategoryId: 0,
    amount: 0,
    mentorId: 0,
    remark: "",
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateExpense({
      ...createExpense,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(RevenueAction.addExpenseInfoAction({ body: createExpense }))
      .then((res: any) => {
        if (res && !res.error) {
          Navigate("/getExpense");
        }
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Add Expense Details</div>
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
                <h3>Add Expense Details</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">
                    Enter Revenue Category ID
                  </label>
                  <input
                    type="number"
                    name="revenueCategoryId"
                    value={createExpense.revenueCategoryId}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Revenue Category Id"
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Enter Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={createExpense.amount}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Enter Mentor ID</label>
                  <input
                    type="number"
                    name="mentorId"
                    value={createExpense.mentorId}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Mentor Id"
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Enter Remark</label>
                  <input
                    type="text"
                    name="remark"
                    value={createExpense.remark}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Remark"
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

export default AddExpenseInfo;
