import "../../../style/Courses/courescrud.css";
import * as timeReducer from "../../../Redux/TimetableRedux/Timetable.reducer";
import * as timeAction from "../../../Redux/TimetableRedux/Timetable.actions";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ISUBJECTS, IUSER } from "../Model/Itimetable";
import { useNavigate } from "react-router-dom";

let TableRow: React.FC = () => {
  let dispatch: AppDispatch = useDispatch();
  let navigate = useNavigate();
  let [state, setstate] = useState<any>();

  let timeTableState: timeReducer.initialState = useSelector(
    (state: RootState) => {
      return state[timeReducer.timeFeatureKey];
    }
  );
  const [validation, setValidation] = useState({
    categoryError: "",
  });

  let dataFromServer = () => {
    dispatch(timeAction.getFacultyAction());
    dispatch(timeAction.getSubjectsAction());
  };

  useEffect(() => {
    dataFromServer();
  }, []);

  let changeInput = (event: React.ChangeEvent<any>) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
    const inputValue = event.target.value;

    // Check if the input contains only letters
    const isDateOnly = /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] (AM|PM)$/.test(
      inputValue
    );
    setValidation({
      categoryError: isDateOnly ? "" : "Please add date in given format",
    });
  };

  let form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(timeAction.createTimeTableRowAction({ obj: state }))
      .then((res: any) => {
        if (res && !res.error) {
          console.log(res);
          navigate("/time_table");
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
      <h1>{JSON.stringify(state)}</h1>
      <div className="create_course">
        <div className="course-create_form">
          <form
            className="row g-3"
            onSubmit={(e) => {
              form(e);
            }}
          >
            <div className="row">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Select Subject
                </label>
                <select
                  className="form-select"
                  name={"sub_id"}
                  onChange={(e) => {
                    changeInput(e);
                  }}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  {timeTableState.subjectData.map(
                    (elem: ISUBJECTS, ind: any) => {
                      return (
                        <>
                          <option value={elem.sub_id}>{elem.subject}</option>
                        </>
                      );
                    }
                  )}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Select Faculty
                </label>
                <select
                  className="form-select"
                  onChange={(e) => {
                    changeInput(e);
                  }}
                  name={"user_id"}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  {timeTableState.facultyData.map((elem: IUSER, ind: any) => {
                    return (
                      <>
                        <option
                          value={elem.user_id}
                        >{` ${elem.first_name} ${elem.last_name}`}</option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Enter Exact Time
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    changeInput(e);
                  }}
                  className={`form-control  ${
                    validation.categoryError && "is-invalid"
                  }`}
                  name="time"
                  placeholder="HH:MM:SS AM/PM"
                  id="inputEmail4"
                />
                {validation.categoryError && (
                  <div className="invalid-feedback">
                    {validation.categoryError}
                  </div>
                )}
              </div>
            </div>

            <div className="course_create_button row mt-2">
              <button type="submit" className="btn btn-success col-md-2">
                Submit
              </button>
              <button type="reset" className="btn btn-warning col-md-2">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TableRow;
