import React, { useState } from "react";
import * as UroleReducer from "../../../Redux/UroleRedux/urole.reducer";
import * as UroleAction from "../../../Redux/UroleRedux/urole.action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { Iaddurole, Iurole } from "../Model/Iurole";


const AddRole = () => {
  const Navigate = useNavigate();
  //data from redux store
  // const uroleReduxState: UroleReducer.InitialState = useSelector(
  //   (state: RootState) => {
  //     return state[UroleReducer.uroleFeatureKey];
  //   }
  // );
  const dispatch: AppDispatch = useDispatch();

  const [addRole, setAddRole] = useState<Iaddurole>({
    name: "",
  });

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddRole({
      ...addRole,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert("Revenue Added Successfully");

    dispatch(UroleAction.addNewRoleAction({ body: addRole }))
      .then((res: any) => {
        if (res && !res.error) {
          Navigate("/urole");
        }
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Add User Role</div>
            <div className="p fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nostrum amet facilis reiciendis aperiam ducimus consequuntur,
              commodi laboriosam architecto doloribus, repellendus, ab
              aspernatur adipisci numquam fugit velit omnis eaque ipsa. Ullam,
              consequatur et quaerat amet eos accusamus pariatur? Accusamus,
              amet. Voluptatem quasi voluptatibus dolores. Facere odio sint
              numquam tempore exercitationem earum, alias eaque ut porro
              laudantium deleniti corporis repellat nulla eveniet nihil
              obcaecati quas soluta dolorum asperiores in ex aliquid possimus
              error voluptate! Quaerat incidunt voluptatem,
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card p-3">
              <div className="card-header bg-warning ">
                <h3>Add New Role</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">
                    Enter Role Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={addRole.name}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Role Name"
                  />
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn btn-outline-success">
                    Submit
                  </button>

                  <button type="reset" className="btn btn-outline-danger">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddRole;
