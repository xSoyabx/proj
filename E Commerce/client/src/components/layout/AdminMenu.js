import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="list-group">
        <NavLink
          to=""
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </NavLink>
        <NavLink to="" className="list-group-item list-group-item-action">
          Create category
        </NavLink>
        <NavLink to="" className="list-group-item list-group-item-action">
          A third link item
        </NavLink>
        <NavLink to="" className="list-group-item list-group-item-action">
          A fourth link item
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action disabled"
          aria-disabled="true"
        >
          A disabled link item
        </NavLink>
      </div>
    </>
  );
};

export default AdminMenu;
