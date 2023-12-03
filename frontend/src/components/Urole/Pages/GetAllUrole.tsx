import React, { useEffect } from "react";
import * as UroleReducer from "../../../Redux/UroleRedux/urole.reducer";
import * as UroleAction from "../../../Redux/UroleRedux/urole.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { Link } from "react-router-dom";
import { usePagination } from "../../Pagination";
import { Pagination } from "react-bootstrap";

const GetUrole: React.FC = () => {
  //data from redux store
  const uroleReduxState: UroleReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UroleReducer.uroleFeatureKey];
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
    perPageRecords: 5,
    totalPageRecords: uroleReduxState.uroles.length,
  });

  useEffect(() => {
    dataFromserver();
    console.log(uroleReduxState);
  }, []);

  const dataFromserver = () => {
    dispatach(UroleAction.getAllRolesAction());
  };
  const deleteRole = (id: string) => {
    if (id) {
      dispatach(UroleAction.deleteRoleAction({ id: id })).then(
        (res: any) => {
          if (res && !res.error) {
            dataFromserver();
          }
        }
      );
    }
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
      <Link to="/addurole" className="btn btn-outline-info">
        Add New Role Here
      </Link>

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
              {uroleReduxState.uroles.slice(
                  startPageIndex,
                  endPageIndex + 1
                ).map((urole: any) => {
                  return (
                    <tr>
                      <td>{urole.role_id}</td>
                      <td>{urole.role_name}</td>
                      <td>
                        <Link
                          to={`/updateurole/${urole.role_id}`}
                          className="btn btn-outline-success"
                        >
                          Update
                        </Link>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() =>
                            deleteRole(
                              urole.role_id
                            )
                          }
                        >
                          Delete
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

export default GetUrole;
