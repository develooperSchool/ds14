import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  listClasses: string;
  linkClasses: string;
  to: string;
  label: string;
  onClick?: () => void;
}

const TopListItem: React.FC<IProps> = ({
  listClasses,
  linkClasses,
  to,
  label,
  onClick,
}) => {
  return (
    <li className={listClasses}>
      <Link className={linkClasses} to={to} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

export default TopListItem;
