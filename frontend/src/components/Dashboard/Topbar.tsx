import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm  bg-dark">
              <div className="container">
                <Link className="navbar-brand text-light fst-italic" to="/">
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
                    <li className="nav-item">
                      <Link className="nav-link active text-light" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-link active text-light"
                        to={"/login"}
                      >
                        Login
                      </Link>
                      <Link
                        className="nav-link active text-light"
                        to={"/UserProfile"}
                      >
                        User Profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
