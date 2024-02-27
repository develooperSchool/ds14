import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopListItem from "./TopListItem";
import "../../style/style.css";
import { RootState } from "../../Redux/store";
import * as UserReducer from "../../Redux/UserRedux/user.reducer";
import { useSelector } from "react-redux";
import { UserRoles } from "../../utils/UserRoles";
import useAuth from "../../hooks/useAuth";

const Topbar: React.FC<{ collapse: boolean; toggle: () => void }> = ({
  collapse,
  toggle,
}) => {
  const [user, setUser] = useState<string>("");
  const { auth } = useAuth();
  const userReduxState: UserReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[UserReducer.userFeatureKey];
    }
  );

  let userData = null;
  useEffect(() => {
    userData = localStorage.getItem("userData");
    setUser(userData !== null ? userData : "");
    console.log(auth?.user);
  });

  const handleLogout = (): void => {
    localStorage.clear();
  };

  const styles = {
    margin: 0,
    padding: 0,
  };
  return (
    <div style={styles}>
      <nav className="navbar navbar-expand-sm bg-dark-primary">
        <div className="container">
          <i
            className={`bi ${
              collapse ? "bi-chevron-compact-left" : "bi-chevron-compact-right"
            } d-lg-none`}
            style={{
              color: "white",
              textShadow: "0 0 4px #ffffffbc",
            }}
            onClick={toggle}
          ></i>
          <Link className="navbar-brand text-light fst-italic mx-3" to="/">
            Developer School
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <TopListItem
                listClasses="nav-item"
                linkClasses="nav-link active text-light"
                to="/"
                label="Home"
              />

              <TopListItem
                listClasses="nav-item"
                linkClasses="nav-link active text-light"
                to="/enroll"
                label="Enroll Here!"
              />

              {auth?.user ? (
                <TopListItem
                  listClasses="nav-item"
                  linkClasses="nav-link active text-light"
                  to="/login"
                  onClick={handleLogout}
                  label="Logout"
                />
              ) : (
                <TopListItem
                  listClasses="nav-item"
                  linkClasses="nav-link active text-light"
                  to="/login"
                  label="Login"
                />
              )}

              {/* <li>
                <button
                  className="nav-link active text-light"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </li> */}
              <TopListItem
                listClasses="nav-item"
                linkClasses="nav-link active text-light"
                to="/UserProfile"
                label="User Profile"
              />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
