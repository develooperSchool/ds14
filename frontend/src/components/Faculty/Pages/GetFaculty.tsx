import { Link } from "react-router-dom";
import "../../../style/Faculty/Faculty.css";
import { IUSER } from "../Model/Ifaculty";
import { useSelector } from "react-redux";
import * as facultyReducer from "../../../Redux/facultyRedux/faculty.Retucer";
import * as facultyActions from "../../../Redux/facultyRedux/Faculty.actions";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { usePagination } from "../../Pagination";
import Pagination from "react-bootstrap/esm/Pagination";

let GetFaculty: React.FC = () => {
  let facultyRootState: facultyReducer.initialState = useSelector(
    (state: RootState) => {
      return state[facultyReducer.facultyFeatureKey];
    }
  );

  let dispatch: AppDispatch = useDispatch();

  let DataFromServer = () => {
    dispatch(facultyActions.getAllFacultyAction());
  };

  useEffect(() => {
    DataFromServer();
  }, []);

  let remove = (Id: any) => {
    dispatch(facultyActions.deleteFacultyAction({ Id: Id })).then(
      (res: any) => {
        if (res && !res.error) {
          DataFromServer();
        }
      }
    );
  };

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 5,
    totalPageRecords: facultyRootState.facultyDetails.length,
  });
  const [search, setSearch] = useState("");
  const searchItem = facultyRootState.facultyDetails.filter((item: IUSER) => {
    if (search === "") {
      return item;
    } else if (
      item.first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.last_name.toLowerCase().includes(search.toLowerCase()) ||
      item.subject?.toLowerCase().includes(search.toLowerCase()) ||
      item.user_id?.toString().includes(search)
    ) {
      return item;
    }
  });

  return (
    <>
      <div>
        <div>
          <Link to={"/Assign_Faculty"} className="create_course_btn">
            <button className=" btn btn-outline-primary">Add New +</button>
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
                <th scope="col">#SR.NO</th>
                <th scope="col">FACULTY NAME</th>
                <th scope="col">SUBJECT</th>
                <th scope="col">DETAILS</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {(searchItem.length > 0
                ? searchItem
                : facultyRootState.facultyDetails
              )
                .slice(startPageIndex, endPageIndex + 1)
                .map((elem: IUSER, ind: any) => {
                  return (
                    <>
                      <tr className="tr">
                        <th scope="row">{ind + 1}</th>
                        <td>{`${elem.first_name} ${elem.last_name}`}</td>
                        <td>{elem.subject}</td>
                        <th>
                          <div>
                            <Link to={`/facultyDetails/${elem.user_id}`}>
                              <button className="btn ">SEE DETAILS</button>
                            </Link>
                          </div>
                        </th>
                        <td>
                          <div className="course_action_button">
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => {
                                remove(elem.sub_id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
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
      </div>
    </>
  );
};

export default GetFaculty;
