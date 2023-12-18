import { useNavigate } from "react-router-dom";
import "../../../style/Courses/courescrud.css";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { IC, ICOURSES } from "../Model/Icourses";
import { createCourseAction } from "../../../Redux/CoursesRedux/Courses.actions";

let Createcourse = () => {
  let dispatch: AppDispatch = useDispatch();
  const [validation, setValidation] = useState({
    categoryError: "",
  });

  let [state, setstate] = useState<IC>({
    courseName: "",
    courseDuration: "",
    courseFees: "",
  });

  let navigate = useNavigate();

  let changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
    const inputValue = event.target.value;
    // Check if the input contains only letters
    const isLettersOnly = /^[a-zA-Z\s]+$/.test(inputValue);
    setValidation({
      categoryError: isLettersOnly
        ? ""
        : "Category name must contain only letters",
    });
  };

  let form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createCourseAction({ obj: state }))
      .then((res: any) => {
        if (res && !res.error) {
          console.log(res);
          navigate("/course_admin");
        } else {
          alert("Invalid");
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-3">
              <div className="card-header bg-warning">
                <h3 className="">Create Course</h3>
              </div>
              <form
                className="row form"
                onSubmit={(e) => {
                  form(e);
                }}
              >
                <div className="row mt-2 mb-2">
                  <div>
                    <label className="form-label mb-1">Enter Course Name</label>
                    <input
                      type="text"
                      className={`form-control  ${
                        validation.categoryError && "is-invalid"
                      }`}
                      name="courseName"
                      value={state.courseName}
                      onChange={(e) => {
                        changeInput(e);
                      }}
                      id="inputEmail4"
                    />
                    {validation.categoryError && (
                      <div className="invalid-feedback">
                        {validation.categoryError}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-2">
                  <div>
                    <label className="form-label mb-1">Enter Duration</label>
                    <input
                      placeholder="Duration in months/weeks or days"
                      type="text"
                      className={`form-control  ${
                        validation.categoryError && "is-invalid"
                      }`}
                      value={state.courseDuration}
                      onChange={(e) => {
                        changeInput(e);
                      }}
                      name="courseDuration"
                      id="inputEmail4"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div>
                    <label className="form-label mb-1">Enter Course Fees</label>
                    <input
                      type="number"
                      onChange={(e) => {
                        changeInput(e);
                      }}
                      className="form-control"
                      value={state.courseFees}
                      name="courseFees"
                      id="inputEmail4"
                    />
                    {validation.categoryError && (
                      <div className="invalid-feedback">
                        {validation.categoryError}
                      </div>
                    )}
                  </div>
                </div>

                <div className="course_create_button row mt-2 justify-content-center ">
                  <button type="submit" className="btn btn-success col-lg-3">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-warning col-lg-3">
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

export default Createcourse;
