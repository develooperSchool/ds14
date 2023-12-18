import React, { useEffect, useState } from "react";
import * as courseActions from "../../../Redux/CoursesRedux/Courses.actions";
import * as courseReducer from "../../../Redux/CoursesRedux/Courses.reducer";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { ICOURSES } from "../Model/Icourses";
import "../../../style/Courses/courescrud.css";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/esm/Pagination";
import { usePagination } from "../../Pagination";

let Coursescrud: React.FC = () => {
  let courseReduxState: courseReducer.initialState = useSelector(
    (state: RootState) => {
      return state[courseReducer.CourseFeatureKey];
    }
  );

  let dispatch: AppDispatch = useDispatch();
  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 5,
    totalPageRecords: courseReduxState.courses.length,
  });
  const [search, setSearch] = useState("");
  const searchItem = courseReduxState.courses.filter((item: ICOURSES) => {
    if (search === "") {
      return item;
    } else if (
      item.course_name.toLowerCase().includes(search.toLowerCase()) ||
      item.course_duration?.toString().includes(search) ||
      item.course_duration.toLowerCase().includes(search.toLowerCase()) ||
      item.course_id?.toString().includes(search)
    ) {
      return item;
    }
  });

  let dataFromServer = () => {
    dispatch(courseActions.getAllCourseAction());
  };

  useEffect(() => {
    dataFromServer();
  }, []);

  let deleteCourse = (Id: any) => {
    dispatch(courseActions.deleteCourseAction({ Id: Id })).then((res: any) => {
      if (res && !res.error) {
        dataFromServer();
      }
    });
  };

  return (
    <>
      <div className="courses-table">
        <Link to={"/create_course"} className="create_course_btn">
          <button className=" btn btn-outline-success">Create +</button>
        </Link>
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
              <th scope="col">SR.NO</th>
              <th scope="col">COURSE</th>
              <th scope="col">DURATION</th>
              <th scope="col">FEES</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {(searchItem.length > 0 ? searchItem : courseReduxState.courses)
              .slice(startPageIndex, endPageIndex + 1)
              .map((elem: ICOURSES, ind: any) => {
                return (
                  <tr className="tr">
                    <th scope="row">{ind + 1}</th>
                    <td>{elem.course_name}</td>
                    <td>{elem.course_duration}</td>
                    <td>{elem.course_fees}</td>
                    <td>
                      <div className="course_action_button">
                        <Link
                          to={`/course_update/${elem.course_id}`}
                          className="btn btn-outline-warning"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            deleteCourse(elem.course_id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div>
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

export default Coursescrud;
