import React from 'react';

const User = ({user}) => {
      const { profile_img, post_img, like, profile_name } = user;

    
    return (
      <div>
        <div className="border_people grid justify-center border-black p-4">
          <div className="rounded-full   border-2 border-purple-600  ">
            <img src={profile_img} alt="" className="rounded-full w-24 h-24" />
          </div>
          <div className="grid justify-center py-2">
            <h1>{profile_name}</h1>
          </div>
          <div className="grid justify-center">
            <button className="btn bg-blue-500 p-2 px-4 w-24 text-white font-bold rounded-xl">
              flow
            </button>
          </div>
        </div>
      </div>
    );
};

export default User;