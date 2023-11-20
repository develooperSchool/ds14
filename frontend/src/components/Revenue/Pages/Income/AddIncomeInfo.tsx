import React, { useState } from "react";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  IAddIncome,
  IAddRevenueCategory,
  IRevenueCategory,
} from "../../Model/IRevenue";
import { Link, useNavigate } from "react-router-dom";

const AddIncomeInfo = () => {
  const Navigate = useNavigate();
  //data from redux store
  const revenueReduxState: RevenueReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[RevenueReducer.revenueFeatureKey];
    }
  );
  const dispatch: AppDispatch = useDispatch();

  const [addIncome, setAddIncome] = useState<IAddIncome>({
    paidFees: 0,
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddIncome({
      ...addIncome,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(RevenueAction.addRevenueCategoryAction({ body: addIncome }))
      .then((res: any) => {
        if (res && !res.error) {
          Navigate("/getIncome");
        }
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };
  //code for dropdown
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (e: any) => {
    // Update the state with the selected value
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Add Income Details</div>
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
                <h3>Add Income Deatails</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">Select Course</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selectedValue}
                    onChange={(e) => handleDropdownChange(e)}
                  >
                    <option selected>Select Course Name</option>
                    <option value="80000">Full Stack Develper</option>
                    <option value="20000">HTML</option>
                    <option value="25000">CSS</option>
                    <option value="30000">Node JS</option>
                    <option value="40000">React JS</option>
                    <option value="10000">MY SQL</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label className="form-label">Course Fees</label>
                  <input
                    type="text"
                    value={selectedValue}
                    className="form-control"
                    disabled
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Enter Paid Fees</label>
                  <input
                    type="text"
                    name="paidFees"
                    value={addIncome.paidFees}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Paid Fees"
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Balanced Fees</label>
                  <input type="text" className="form-control" disabled />
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

export default AddIncomeInfo;
