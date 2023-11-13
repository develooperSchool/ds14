import React, { useEffect } from "react";
import * as UroleReducer from "../../../Redux/UroleRedux/urole.reducer";
import * as UroleAction from "../../../Redux/UroleRedux/urole.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { Link } from "react-router-dom";

const GetUrole: React.FC = () => {
  //data from redux store
  const uroleReduxState: UroleReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UroleReducer.uroleFeatureKey];
    }
  );
  const dispatach: AppDispatch = useDispatch();

  useEffect(() => {
    dataFromserver();
    console.log(uroleReduxState);
  }, []);

  const dataFromserver = () => {
    dispatach(UroleAction.getAllRolesAction());
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col">
            <h3 className="text-success mt-3">About Role Name</h3>
            <p className="fst-italic text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              nobis exercitationem nam quis unde at quos cum porro alias
              aspernatur incidunt adipisci a quidem ab, qui magnam expedita
              architecto repudiandae aut totam. Sit atque quasi hic tempore
              minus, molestiae recusandae odit officia sed ea soluta corporis
              id! Saepe, ea reiciendis?
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={'/create'} className="btn btn-outline-info">+New</Link>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-stripped table-hover text-center">
              <thead>
                <tr>
                  <th>Role Id</th>
                  <th>Role Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {uroleReduxState.uroles.map((urole: any) => {
                  return (
                    <tr>
                      <td>{urole.role_id}</td>
                      <td>{urole.role_name}</td>
                      <td>
                        <Link
                          to={`/update/${urole.role_id}`}
                          className="btn btn-outline-success"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                         
                        >
                          Delete
                        </button>
                      </td>
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

export default GetUrole;
