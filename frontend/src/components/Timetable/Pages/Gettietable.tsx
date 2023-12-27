import "../../../style/Time-table/Time-table.css";
import * as timeReducer from "../../../Redux/TimetableRedux/Timetable.reducer";
import * as timeAction from "../../../Redux/TimetableRedux/Timetable.actions";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TABLEDATA } from "../Model/Itimetable";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-bootstrap/esm/Pagination";
import { usePagination } from "../../Pagination";

let Gettimetable: React.FC = () => {
  let dispatch: AppDispatch = useDispatch();

  let timeTableState: timeReducer.initialState = useSelector(
    (state: RootState) => {
      return state[timeReducer.timeFeatureKey];
    }
  );

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 5,
    totalPageRecords: timeTableState.Timetablerows.length,
  });

  let data = () => {
    dispatch(timeAction.getTimeTableAction());
  };

  useEffect(() => {
    data();
  }, []);

  let remove = (Id: string) => {
    dispatch(timeAction.deleteTimeTableAction({ Id: Id })).then((res: any) => {
      if (res && !res.error) {
        data();
      }
    });
  };

  return (
    <>
      <div className="time_table">
        <Link to={"/add_timeTable_row"}>
          {" "}
          <button className="btn btn-primary">Add New+</button>
        </Link>
        <table className="table table-stripped table-hover">
          <thead>
            <tr>
              <th scope="col">#SR.NO</th>
              <th scope="col">SUBJECT</th>
              <th scope="col">TIME</th>
              <th scope="col">FACULTY</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {timeTableState.Timetablerows.slice(
              startPageIndex,
              endPageIndex
            ).map((elem: TABLEDATA, ind: any) => {
              return (
                <>
                  <tr>
                    <th>{ind + 1}</th>
                    <td>{elem.subject}</td>
                    <td>{elem.time}</td>
                    <td>{`${elem.first_name} ${elem.last_name}`}</td>
                    <td>
                      <div className="course_action_button">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            remove(elem.Id);
                          }}
                        >
                          Delete
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
    </>
  );
};

export default Gettimetable;
