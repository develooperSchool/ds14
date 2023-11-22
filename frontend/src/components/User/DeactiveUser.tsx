import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { IDeactive, IUpdate } from "./Model/Iuser";
import * as userAction from "../../Redux/UserRedux/user.action";
import * as userReducer from "../../Redux/UserRedux/user.reducer";
import { AppDispatch, RootState } from "./Redux/store";

const DeactiveUser: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  //Data from redux store

  const userReduxState: userReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[userReducer.userFeatureKey];
    }
  );

  const { user } = userReduxState;
  const { id } = useParams();
  const navi = useNavigate();

  const [activeUser, setActiveUser] = useState<IDeactive>({
    user_id: "",
    is_active: 0,
  });
  useEffect(() => {
    if (id) {
      dataFromServer(id);
    }
  }, [id]);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setActiveUser({
        ...activeUser,
        is_active: user.is_active,
      });
    }
  }, [user]);
  const dataFromServer = (id: string) => {
    dispatch(userAction.getUserAction({ id: id }));
  };
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setActiveUser({
      ...activeUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let deactiveUser: IDeactive = {
      is_active: activeUser.is_active,
    };
    dispatch(
      userAction.deactiveUserAction({
        deactiveUser,
        id,
      })
    ).then((res: any) => {
      if (res && !res.error) {
        navi("/");
      }
    });
  };

  return (
    <>
      <pre>{JSON.stringify(id)}</pre>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="h3">Deactivate user</p>
            <p className="fst-italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus vitae deleniti modi nesciunt illum voluptas ipsum
              distinctio, quos aliquam velit ipsa. Nobis quidem, error, libero
              quaerat sunt perspiciatis animi maiores similique debitis minus
              odio? Molestias voluptatum laborum beatae qui laboriosam nobis
              corrupti eveniet tempore quibusdam ipsum ducimus veniam
              consectetur, blanditiis minima modi distinctio temporibus aliquam
              dicta amet ullam suscipit neque.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center">Deactivate User</h1>
          </div>
          <form onSubmit={(e) => submitData(e)}>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <div className="form-group">
                    <label>isActive</label>
                    <input
                      onChange={(e) => changeInput(e)}
                      type="text"
                      name="is_active"
                      value={activeUser.is_active}
                      className="form-control"
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="reset" className="btn btn-success">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeactiveUser;
