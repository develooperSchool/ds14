import React, { useEffect, useState } from "react";
import * as UroleReducer from "../../../Redux/UroleRedux/urole.reducer";
import * as UroleAction from "../../../Redux/UroleRedux/urole.action";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Iurole } from "../Model/Iurole";

const UpdateRole: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const uroleReduxState: UroleReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UroleReducer.uroleFeatureKey];
    }
  );
  const { urole } = uroleReduxState;
  const { id } = useParams();

  const [updateRole, setUpdateRole] = useState<Iurole>({
    role_id: "",
    role_name: "",
  });

  useEffect(() => {
    if (id) {
      dataFromServer(id);
    }
  }, [id]);

  useEffect(() => {
    if (urole && Object.keys(urole).length > 0) {
      setUpdateRole({
        ...updateRole,
        role_id: urole.role_id,
        role_name: urole.role_name,
      });
    }
  }, [urole]);

  const dataFromServer = (id: string) => {
    dispatch(UroleAction.getRoleByIdAction({ id: id }));
  };
  const Navigate = useNavigate();

  const changeInputEvent = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUpdateRole({
      ...updateRole,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // alert("Revenue Added Successfully");

    dispatch(
      UroleAction.updateRoleAction({
        updateNewRole: updateRole,
        id: id,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        Navigate("/urole");
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="h3 text-success">Update Revenue Category</div>
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
                <h3>Update Revenue Category</h3>
              </div>
              <form onSubmit={(e) => submitData(e)}>
                <div className="mb-2">
                  <label className="form-label">
                    Enter Revenue Category Name
                  </label>
                  <input
                    type="text"
                    name="role_name"
                    value={updateRole.role_name}
                    onChange={(e) => {
                      changeInputEvent(e);
                    }}
                    className="form-control"
                    placeholder="Enter Revenue Category"
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

export default UpdateRole;
