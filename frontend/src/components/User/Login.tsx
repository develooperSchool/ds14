import React, { useContext, useEffect, useState } from "react";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";
import * as UserAction from "../../Redux/UserRedux/user.action";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "./Model/Iuser";
import useAuth from "../../hooks/useAuth";
import FormWrapper from "../Forms/FormWrapper";
import Form from "../Forms/Form";
import AuthContext from "../../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );

  const [login, setlogin] = useState<IUser>({
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const { setAuth } = useContext(AuthContext);

  const changeInputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await dispatch(UserAction.userLoginAction({ user: login }));
    if (typeof result?.payload === "string") alert(result?.payload);
    else {
      setAuth({
        user: result.payload,
        accessToken: result?.payload?.token,
        role: result?.payload?.role_id,
      });
      localStorage.setItem("userData", JSON.stringify(result.payload));
      navigate("/");
    }
  };
  return (
    <>
      <FormWrapper>
        <Form
          title={`Login`}
          login={login}
          changeInputEvent={changeInputEvent}
          handleLogin={handleLogin}
        />
      </FormWrapper>
    </>
  );
};

export default Login;
