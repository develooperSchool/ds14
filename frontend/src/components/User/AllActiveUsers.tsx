import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./Redux/store";
import * as UserAction from "../../Redux/UserRedux/user.action";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllActiveUsers: React.FC = () => {
  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );

  const dispatch: AppDispatch = useDispatch();

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
                {userReduxState.users.map((user) => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AllActiveUsers;
