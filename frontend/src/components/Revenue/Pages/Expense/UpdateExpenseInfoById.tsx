import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../Redux/store";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IAddExpense, IExpense } from "../../Model/IRevenue";

const UpdateExpenseInfoById: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [validation, setValidation] = useState({
    categoryError: "",
  });

  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );
  const { Expense } = revenueReduxState;
  const { expenseId } = useParams();

  const [createExpense, setCreateExpense] = useState<IExpense>({
    expense_id: 0,
    revenue_category_id: 0,
    amount: 0,
    mentor_id: 0,
    remark: "",
  });

  useEffect(() => {
    if (expenseId) {
      dataFromServer(Number(expenseId));
    }
  }, [expenseId]);

  useEffect(() => {
    if (Expense && Object.keys(Expense).length > 0) {
      setCreateExpense({
        ...createExpense,
        expense_id: Expense.expense_id,
        revenue_category_id: Expense.revenue_category_id,
        mentor_id: Expense.mentor_id,
        amount: Expense.amount,
        remark: Expense.remark,
      });
    }
  }, [Expense]);

  const dataFromServer = (expenseId: number) => {
    dispatch(RevenueAction.getExpenseInfoByIdAction({ expenseId: expenseId }));
  };
  const Navigate = useNavigate();

  const changeInputEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputValue = event.target.value;

    // Check if the input contains only letters
    const isNumberOnly = /^[0-9]+$/.test(inputValue);
    setValidation({
      categoryError: isNumberOnly ? "" : "Please Enter Number Only",
    });
    setCreateExpense({
      ...createExpense,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let updateExpenseData: IAddExpense = {
      revenueCategoryId: createExpense.revenue_category_id,
      amount: createExpense.amount,
      mentorId: createExpense.mentor_id,
      remark: createExpense.remark,
    };

    dispatch(
      RevenueAction.updateExpenseInfoByIdAction({
        updateExpenseData,
        expenseId,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        Navigate("/getExpense");
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Update Expense Amount Here...</div>
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
                <h3>Update Expense Amount</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">Enter Expense Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={createExpense.amount}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className={`form-control ${
                      validation.categoryError && "is-invalid"
                    }`}
                    placeholder="Enter Expense Amount"
                  />
                  {validation.categoryError && (
                    <div className="invalid-feedback">
                      {validation.categoryError}
                    </div>
                  )}
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

export default UpdateExpenseInfoById;
