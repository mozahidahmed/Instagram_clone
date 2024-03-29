import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const Navbar = () => {
 //done this section
  return (
    <div className="flex justify-between items-center bg-white  lg:text-3xl text-2xl ">
      <Link to="/">
        <h1 className=" font-bold logo">moza_sani</h1>
      </Link>

      <div className="flex gap-4">
        <Link to="/addpost">
          <div className="">
            <MdAddCircleOutline />
          </div>
        </Link>

        <Link to="/allusers">
          <div className="">
            <MdPeopleAlt />
          </div>
        </Link>
        <Link to="/sendmessege">
          <div className="">
            <LuSend />
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
