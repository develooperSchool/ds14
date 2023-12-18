import * as enrollmentReducer from "../../../Redux/EnrollmentRedux/Enrollment.reducer";
import * as enrollmentActions from "../../../Redux/EnrollmentRedux/Enrollment.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../User/Redux/store";
import { useEffect, useState } from "react";
import "../../../style/Courses/courescrud.css";
import { IENROLMENT } from "../Model/IENROLLMENT";
import { usePagination } from "../../Pagination";
import Pagination from "react-bootstrap/esm/Pagination";

let Enrollment: React.FC = () => {
  const EnrollmentReduxState: enrollmentReducer.initialState = useSelector(
    (state: RootState) => {
      return state[enrollmentReducer.enrollmentFeatureKey];
    }
  );

  const dispatach: AppDispatch = useDispatch();
  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 10,
    totalPageRecords: EnrollmentReduxState.userEnrollmentData.length,
  });

  let dataFromServer = () => {
    dispatach(enrollmentActions.getAllEnrollmentAction());
  };

  useEffect(() => {
    dataFromServer();
  }, []);

  const [search, setSearch] = useState("");
  const searchItem = EnrollmentReduxState.userEnrollmentData.filter(
    (item: IENROLMENT) => {
      if (search === "") {
        return item;
      } else if (
        item.course_name.toLowerCase().includes(search.toLowerCase()) ||
        item.course_duration?.toString().includes(search) ||
        item.course_duration.toLowerCase().includes(search.toLowerCase()) ||
        item.user_id?.toString().includes(search) ||
        item.first_name.toLowerCase().includes(search.toLowerCase()) ||
        item.last_name.toLowerCase().includes(search.toLowerCase())
      ) {
        return item;
      }
    }
  );

  return (
    <>
      <div className="courses-table">
        <div className="col-3">
          <input
            type="text"
            placeholder="Search Here"
            className="form-control"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
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
            {(searchItem.length > 0
              ? searchItem
              : EnrollmentReduxState.userEnrollmentData
            )
              .slice(startPageIndex, endPageIndex)
              .map((elem: IENROLMENT, ind: any) => {
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
    </>
  );
};

export default Enrollment;
