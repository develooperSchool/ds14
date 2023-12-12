import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./Redux/store";
import * as UserAction from "../../Redux/UserRedux/user.action";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePagination } from "../Pagination";
import { Pagination } from "react-bootstrap";

const AllActiveUsers: React.FC = () => {
  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );
  const [search, setSearch] = useState("");

  const searchItem = userReduxState.users.filter((item) => {
    if (search === "") {
      return item;
    } else if (
      item.first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.last_name.toLowerCase().includes(search.toLowerCase()) ||
      item.caste_category.toLowerCase().includes(search.toLowerCase()) ||
      item.user_id?.toString().includes(search)
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
    perPageRecords: 5,
    totalPageRecords: userReduxState.users.length,
  });

  useEffect(() => {
    dataFromServer();
  }, []);

  const dataFromServer = () => {
    dispatch(UserAction.getAllActiveUserAction());
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">All Active Users</p>
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
            <div className="col-3">
              <input
                type="text"
                placeholder="Search Here"
                className="form-control"
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
                </tr>
              </thead>
              <tbody>
                {(searchItem.length > 0 ? searchItem : userReduxState.users)
                  .slice(startPageIndex, endPageIndex + 1)
                  .map((user) => {
                    return (
                      <tr key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.address}</td>
                        <td>{user.qualification}</td>
                        <td>{user.passing_year}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <td>{user.caste_category}</td>
                        <td>{user.subcaste}</td>
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

export default AllActiveUsers;
