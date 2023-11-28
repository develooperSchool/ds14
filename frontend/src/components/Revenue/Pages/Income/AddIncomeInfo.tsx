import React, { useEffect, useState } from "react";
import * as RevenueReducer from "../../../../Redux/RevenueRedux/revenue.reducer";
import * as RevenueAction from "../../../../Redux/RevenueRedux/revenue.action";
import { AppDispatch } from "../../../../Redux/store";
import { useDispatch } from "react-redux";
import { IAddIncome } from "../../Model/IRevenue";
import { useNavigate } from "react-router-dom";
import { ICOURSES } from "../../../Courses/Model/Icourses";
import { IUser } from "../../../User/Model/Iuser";
import { IUSERBYID } from "../../../Faculty/Model/Ifaculty";
import * as EnrollmentAction from "../../../../Redux/EnrollmentRedux/Enrollment.actions";

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

  const [courseObject, setCourseObject] = useState<ICOURSES>({
    course_duration: "",
    course_fees: "",
    course_name: "",
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddIncome({
      ...addIncome,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    let localCourse: string | null = localStorage.getItem("courseData");
    let localUser: string | null = localStorage.getItem("userData");
    let userData: IUSERBYID = localUser ? JSON.parse(localUser) : {};
    let courseData: ICOURSES = localCourse
      ? JSON.parse(localCourse)
      : courseObject;
    setCourseObject(courseData);
    // if (courseObject.course_fees !== "") {
    //   console.log(courseObject);

    setAddIncome({
      ...addIncome,
      totalFees: Number(courseObject.course_fees),
      balanceFees: Number(courseObject.course_fees),
      userId: userData.user_id,
      revenueCategoryId: 1063,
      transactionId: 454545,
      paidFees: Number(courseObject.course_fees),
    });
    console.log(addIncome);
  }, [courseObject.course_fees]);

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submit", addIncome);

    dispatch(RevenueAction.addIncomeInfoAction({ body: addIncome }))
      .then((res: any) => {
        if (res && !res.error) {
          dispatch(
            EnrollmentAction.createEnrollmentAction({
              obj: {
                user_id: addIncome.userId,
                course_id: courseObject.course_id,
              },
            })
          );
          Navigate("/courses");
          localStorage.removeItem("courseData");
        }
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  const calculateBalanceFees = (e: React.ChangeEvent<HTMLInputElement>) => {
    let balanceFee = Number(addIncome.totalFees) - Number(addIncome.paidFees);
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
                      <input
                        className="form-control"
                        name="course_name"
                        value={courseObject.course_name}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <div className="mb-2">
                        <label className="form-label">Course Fees</label>
                        <input
                          type="text"
                          name="totalFees"
                          onChange={(e) => changeInputEvent(e)}
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
                          type="number"
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
