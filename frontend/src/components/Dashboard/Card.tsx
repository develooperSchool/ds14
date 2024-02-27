import React from "react";
import "../../style/style.css";

interface ICardProps {
  title: string;
  icon: string;
  count: number;
  description: string;
}

const Card: React.FC<ICardProps> = ({ title, icon, count, description }) => {
  return (
    <>
      <div className="card card-shadow">
        <div className="card-body text-start">
          <div className="cart d-flex justify-content-between">
            <p className="card-text">
              <b>{title}</b>
            </p>
            <p>
              <i className={icon}></i>
            </p>
          </div>

          <p className="card-text">
            <b>{count}</b>
          </p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
