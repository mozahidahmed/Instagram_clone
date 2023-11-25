import React from 'react';
import { MdPeopleAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    return (
      <div className="flex justify-between items-center text-3xl">
        <h1 className="text-3xl font-bold logo">Instagram</h1>
        <div className="flex gap-4">
          <div className="">
            <MdPeopleAlt />
          </div>
          <div className="">
            <CgProfile />
          </div>
        </div>
      </div>
    );
};

export default Navbar;