import * as enrollmentReducer from "../../../Redux/EnrollmentRedux/Enrollment.reducer";
import * as enrollmentActions from "../../../Redux/EnrollmentRedux/Enrollment.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../User/Redux/store";
import { useEffect } from "react";
import "../../../style/Courses/courescrud.css";
import { IENROLMENT } from "../Model/IENROLLMENT";

let Enrollment: React.FC = () => {
  const EnrollmentReduxState: enrollmentReducer.initialState = useSelector(
    (state: RootState) => {
      return state[enrollmentReducer.enrollmentFeatureKey];
    }
  );

  const dispatach: AppDispatch = useDispatch();

  let dataFromServer = () => {
    dispatach(enrollmentActions.getAllEnrollmentAction());
  };

  useEffect(() => {
    dataFromServer();
  }, []);

  return (
    <>
      <div className="courses-table">
        <table className="table table-stripped table-hover">
          <thead className="course_table_head ">
            <tr>
              <th scope="col-lg-01">#Course Id</th>
              <th scope="col-lg-01">COURSE</th>
              <th scope="col-lg-01">User Id</th>
              <th scope="col-lg-01">User Name</th>
              <th scope="col-lg-01">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {EnrollmentReduxState.userEnrollment.map(
              (elem: IENROLMENT, ind: any) => {
                return (
                  <>
                    <tr>
                      <th>{elem.course_id}</th>
                      <td>{elem.course_name}</td>
                      <th>{elem.user_id}</th>
                      <td>{`${elem.first_name} ${elem.last_name}`}</td>
                      <td>
                        <button className="btn"> Details</button>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Enrollment;
