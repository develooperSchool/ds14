import { useNavigate, useParams } from "react-router-dom";
import "../../../style/Courses/courescrud.css";
import { useEffect, useState } from "react";
import { IC, ICOURSES } from "../Model/Icourses";
import {
  getCourseByIdAction,
  updateCourseAction,
} from "../../../Redux/CoursesRedux/Courses.actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import * as courseReducer from "../../../Redux/CoursesRedux/Courses.reducer";
import "../../../style/Courses/courescrud.css";

let Updatecourse = () => {
  let { Id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const coursesReduxState: courseReducer.initialState = useSelector(
    (state: RootState) => {
      return state[courseReducer.CourseFeatureKey];
    }
  );

  let { course } = coursesReduxState;

  let [state, setState] = useState<IC>({} as IC);

  let dataById = (Id: any) => {
    dispatch(getCourseByIdAction({ Id: Id }));
  };

  useEffect(() => {
    dataById(Id);
  }, [Id]);

  useEffect(() => {
    if (course && Object.keys(course).length > 0) {
      setState({
        ...state,
        courseName: course.course_name,
        courseDuration: course.course_duration,
        courseFees: course.course_fees,
      });
    }
  }, [course]);

  let changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  let form = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateCourseAction({ Id: Id, obj: state }))
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
      <div>
        <div className="course-create_form">
          <form
            className="row g-3"
            onSubmit={(e) => {
              form(e);
            }}
          >
            <div className="row mt-5">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Course Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="courseName"
                  value={state.courseName}
                  onChange={(e) => {
                    changeInput(e);
                  }}
                  id="inputEmail4"
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Course Duration ( In Months)
                </label>
                <input
                  type="number"
                  className="form-control "
                  value={state.courseDuration}
                  onChange={(e) => {
                    changeInput(e);
                  }}
                  name="courseDuration"
                  id="inputEmail4"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Course Fees
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    changeInput(e);
                  }}
                  className="form-control"
                  value={state.courseFees}
                  name="courseFees"
                  id="inputEmail4"
                />
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

export default Updatecourse;
