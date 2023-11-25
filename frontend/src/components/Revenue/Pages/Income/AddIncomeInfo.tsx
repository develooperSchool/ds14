import React, { useState } from "react";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch } from "../../../../Redux/store";
import { useDispatch } from "react-redux";
import { IAddIncome } from "../../Model/IRevenue";
import { useNavigate } from "react-router-dom";

const AddIncomeInfo = () => {
  const Navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const [addIncome, setAddIncome] = useState<IAddIncome>({
    totalFees: 0,
    paidFees: 0,
    balanceFees: 0,
    amount: 0,
    userId: 0,
    transactionId: 0,
    revenueCategoryId: 0,
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddIncome({
      ...addIncome,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit", addIncome);

    dispatch(RevenueAction.addIncomeInfoAction({ body: addIncome }))
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

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the state with the selected value
    setSelectedValue(e.target.value);
    setAddIncome({
      ...addIncome,
      totalFees: Number(e.target.value),
    });
  };

  const calculateBalanceFees = (e: React.ChangeEvent<HTMLInputElement>) => {
    let balanceFee = Number(selectedValue) - Number(e.target.value);
    if (balanceFee >= 0) {
      setAddIncome({
        ...addIncome,
        balanceFees: balanceFee,
        amount: Number(e.target.value),
      });
    } else {
      alert("Amount cannot be greater than Balance Fee");
      setAddIncome({
        ...addIncome,
        paidFees: 0,
        amount: 0,
        balanceFees: 0,
      });
    }
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
      <div className="offset-lg-2 col-lg-8 mt-3">
        <div className="container mt-2">
          <div className="card">
            <div className="card-header bg-warning ">
              <h3>Add Income Deatails</h3>
            </div>

            <form onSubmit={(e) => submitData(e)}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
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
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">Course Fees</label>
                        <input
                          type="text"
                          name="totalFees"
                          value={addIncome.totalFees}
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">Enter Paid Fees</label>
                        <input
                          type="text"
                          name="paidFees"
                          value={addIncome.paidFees}
                          onChange={(e) => {
                            changeInputEvent(e);
                          }}
                          onBlur={(e) => calculateBalanceFees(e)}
                          className="form-control"
                          placeholder="Enter Paid Fees"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">Balanced Fees</label>
                        <input
                          type="text"
                          name="balanceFees"
                          value={addIncome.balanceFees}
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">Income Amount </label>
                        <input
                          type="text"
                          name="amount"
                          value={addIncome.amount}
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">Transaction ID</label>
                        <input
                          type="text"
                          name="transactionId"
                          value={addIncome.transactionId}
                          onChange={(e) => {
                            changeInputEvent(e);
                          }}
                          className="form-control"
                          placeholder="Transaction ID "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">User Id</label>
                        <input
                          type="text"
                          name="userId"
                          value={addIncome.userId}
                          onChange={(e) => {
                            changeInputEvent(e);
                          }}
                          className="form-control"
                          placeholder="Enter User ID "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">
                          Revenue Category Id
                        </label>
                        <input
                          type="text"
                          name="revenueCategoryId"
                          value={addIncome.revenueCategoryId}
                          onChange={(e) => {
                            changeInputEvent(e);
                          }}
                          className="form-control"
                          placeholder="Enter Revenue Category ID "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-outline-success">
                      Submit
                    </button>

                    <button type="reset" className="btn btn-outline-danger">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddIncomeInfo;
