import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const Navbar = () => {
  //done
  return (
    <div className="flex justify-between items-center lg:text-3xl text-2xl sticky top-0 z-[50]">
      <Link to="/">
        <h1 className=" font-bold logo">Instagram</h1>
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
