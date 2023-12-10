import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import * as facultyReducer from "../../../Redux/facultyRedux/faculty.Retucer";
import * as facultyActions from "../../../Redux/facultyRedux/Faculty.actions";
import { IUSERBYID } from "../Model/Ifaculty";
import Pagination from "react-bootstrap/esm/Pagination";
import { usePagination } from "../../Pagination";

let FacultyDetails: React.FC = () => {
  let facultyRootState: facultyReducer.initialState = useSelector(
    (state: RootState) => {
      return state[facultyReducer.facultyFeatureKey];
    }
  );

  let dispatch: AppDispatch = useDispatch();
  let { userId } = useParams();

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 5,
    totalPageRecords: facultyRootState.facultyDataByID.length,
  });

  let DataFromServer = () => {
    dispatch(facultyActions.getFacultyByIdAction({ Id: userId }));
  };

  useEffect(() => {
    DataFromServer();
  }, []);

  return (
    <>
      <div className="faculty_table">
        <div className="courses-table">
          <table className="table table-stripped table-hover">
            <thead className="course_table_head ">
              <tr>
                <th scope="col">#ROLE ID</th>
                <th scope="col">FACULTY </th>
                <th scope="col">EMAIL</th>
                <th scope="col">CONTACT</th>
                <th scope="col">QUALIFICATION</th>
                <th scope="col">PASSING YEAR</th>
                <th scope="col">DOB</th>
                <th scope="col">GENDER</th>
                <th scope="col">ADDRESS</th>
              </tr>
            </thead>
            <tbody>
              {facultyRootState.facultyDataByID
                .slice(startPageIndex, endPageIndex)
                .map((elem: IUSERBYID, ind: any) => {
                  return (
                    <>
                      <tr>
                        <td>{elem.role_id}</td>
                        <td>{`${elem.first_name} ${elem.last_name}`}</td>
                        <td>{elem.email}</td>
                        <td>{elem.contact}</td>
                        <td>{elem.qualification}</td>
                        <td>{elem.passing_year}</td>
                        <td>{elem.dob}</td>
                        <td>{elem.gender}</td>
                        <td>{elem.address}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
          <Pagination>
            <Pagination.First onClick={() => displayPage(1)} />
            <Pagination.Prev
              onClick={() => displayPage(currentPageIndex - 1)}
              disabled={currentPageIndex === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPageIndex}
                onClick={() => displayPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => displayPage(currentPageIndex + 1)}
              disabled={currentPageIndex === totalPages}
            />
            <Pagination.Last onClick={() => displayPage(totalPages)} />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default FacultyDetails;
