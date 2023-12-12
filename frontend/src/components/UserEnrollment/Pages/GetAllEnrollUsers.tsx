import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePagination } from "../../Pagination";
import * as UserEnrollAction from "../../../Redux/UserEnrollRedux/userEnroll.action";
import * as UserEnrollReducer from "../../../Redux/UserEnrollRedux/userEnroll.reducer";
import { RootState, AppDispatch } from "../../User/Redux/store";
import { Pagination } from "react-bootstrap";
import * as userEnrollAction from "../../../Redux/UserEnrollRedux/userEnroll.action";
import { Link } from "react-router-dom";

const GetAllEnrollUsers: React.FC = () => {
  const userEnrollReduxState: UserEnrollReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserEnrollReducer.userEnrollFeatureKey];
    }
  );

  const [search, setSearch] = useState("");

  const searchItem = userEnrollReduxState.usersEnroll.filter((item) => {
    if (search == "") {
      return item;
    } else if (
      item.first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.enroll_id?.toString().includes(search)
    ) {
      return item;
    }
  });

  const dispatch: AppDispatch = useDispatch();

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  } = usePagination({
    perPageRecords: 7,
    totalPageRecords: userEnrollReduxState.usersEnroll.length,
  });

  useEffect(() => {
    dataFromServer();
  }, []);

  const dataFromServer = () => {
    dispatch(UserEnrollAction.getAllEnrollUserAction());
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">All Users</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              voluptas quod repellat nisi, maxime quas omnis iure? Officia,
              nobis dolores voluptates atque quas pariatur totam itaque magnam
              veniam, veritatis cum distinctio iusto labore, exercitationem
              beatae delectus? A assumenda dolorem quaerat nesciunt, dolore
              eaque suscipit. Delectus fuga repellendus, debitis eum porro ab
              obcaecati. Veniam vero accusantium amet voluptatum sint assumenda
              nam.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <Link className="btn btn-outline-info m-3" to={"/enroll"}>
          +New
        </Link>
        <div className="col-3">
          <input
            type="text"
            placeholder="Search Here"
            className="form-control"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-striped table-hover text-center">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>EmailId</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Qualification</th>
                  <th>PassingYear</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Caste</th>
                  <th>Subcaste</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(searchItem.length > 0
                  ? searchItem
                  : userEnrollReduxState.usersEnroll
                )
                  .slice(startPageIndex, endPageIndex + 1)
                  .map((userE) => {
                    return (
                      <tr>
                        <td>{userE.enroll_id}</td>
                        <td>{userE.first_name}</td>
                        <td>{userE.last_name}</td>
                        <td>{userE.email}</td>
                        <td>{userE.contact}</td>
                        <td>{userE.address}</td>
                        <td>{userE.qualification}</td>
                        <td>{userE.passing_year}</td>
                        <td>{userE.dob}</td>
                        <td>{userE.gender}</td>
                        <td>{userE.caste_category}</td>
                        <td>{userE.subcaste}</td>
                        <td>
                          <Link
                            to={`/updateEnrolluser/${userE.enroll_id}`}
                            className="btn btn-outline-success"
                          >
                            UPDATE
                          </Link>
                          <button className="btn btn-outline-danger ms-3">
                            DELETE
                          </button>
                        </td>
                      </tr>
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
      </div>
    </>
  );
};

export default GetAllEnrollUsers;
