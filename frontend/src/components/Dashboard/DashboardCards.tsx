import React, { useEffect } from "react";
import "../../style/style.css";
import Card from "./Card";

const DashboardCards = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <Card
              title={`Student`}
              count={153}
              icon={`bi bi-cart-check`}
              description={`24 new since lat visit`}
            />
          </div>

          <div className="col-lg-3">
            <Card
              title={`Income`}
              icon={`bi bi-cart-check`}
              count={100000}
              description={`12% more than last year`}
            />
          </div>
          <div className="col-lg-3">
            <Card
              title={`Success`}
              icon={`bi bi-cart-check`}
              count={140}
              description={`10% better`}
            />
          </div>
          <div className="col-lg-3">
            <Card
              title={`Progress`}
              icon={`bi bi-cart-check`}
              count={20}
              description={`20% better`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
