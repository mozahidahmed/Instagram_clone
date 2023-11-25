import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-3xl">
      <Link to="/">
        <h1 className="text-3xl font-bold logo">Instagram</h1>
      </Link>

      <div className="flex gap-4">
        <Link to="/allusers">
          <div className="">
            <MdPeopleAlt />
          </div>
        </Link>
        <Link to="/profile">
          <div className="">
            <CgProfile />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
