import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

const UserMenu = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <div className="list-group">
            <h4>Dashboard</h4>
            <NavLink
              to="/dashboard/user/profile"
              className="list-group-item list-group-item-action"
            >
              <CgProfile /> Profile
            </NavLink>
            <NavLink
              to="/dashboard/user/orders"
              className="list-group-item list-group-item-action"
            >
              <BsCart3 /> Orders
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
