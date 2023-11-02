import React from "react";

const Card = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card shadow">
              <div className="card-body text-start">
                <div className="cart d-flex justify-content-between">
                  <p className="card-text">
                    <b>Student</b>
                  </p>
                  <p>
                    <i className="bi bi-cart-check"></i>
                  </p>
                </div>

                <p className="card-text">
                  <b>152</b>
                </p>
                <p className="card-text">
                  <b>24 new </b>since lat visit
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card shadow">
              <div className="card-body text-start">
                <div className="cart d-flex justify-content-between">
                  <p className="card-text">
                    <b>Income</b>
                  </p>
                  <p>
                    <i className="bi bi-cart-check"></i>
                  </p>
                </div>

                <p className="card-text">
                  <b>100000/-</b>
                </p>
                <p className="card-text">
                  <b>24 new </b>since lat visit
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow">
              <div className="card-body text-start">
                <div className="cart d-flex justify-content-between">
                  <p className="card-text">
                    <b>Success</b>
                  </p>
                  <p>
                    <i className="bi bi-cart-check"></i>
                  </p>
                </div>

                <p className="card-text">
                  <b>140</b>
                </p>
                <p className="card-text">
                  <b>24 new </b> since lat visit
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card shadow">
              <div className="card-body text-start">
                <div className="cart d-flex justify-content-between">
                  <p className="card-text">
                    <b>Progress</b>
                  </p>
                  <p>
                    <i className="bi bi-cart-check"></i>
                  </p>
                </div>

                <p className="card-text">
                  <b>12</b>
                </p>
                <p className="card-text">
                  <b>24 new</b> since lat visit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
