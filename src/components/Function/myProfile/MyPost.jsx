import React from "react";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { MdDataSaverOn } from "react-icons/md";

const MyPost = ({ post }) => {
  const { img, profile_img, post_img, like, profile_name } = post;

  return (
    <div>
      <div className="">
        <div className="flex  items-center gap-2">
          <div className="">
            <img
              class="rounded-full w-8 h-8 border-solid border-2 border-purple-600  "
              src={profile_img}
              alt="image description"
            />
          </div>
          <div className="">
            <h2 className="font-bold profile_name">{profile_name}</h2>
          </div>
        </div>
        <div className="mt-2">
          <img src={post_img} alt="" />
        </div>
        <div className="mt-4 text-2xl font-bold flex justify-between">
          <div className="flex gap-4">
            <BsHeart />
            <FaRegComment />
            <TbLocationShare />
          </div>
          <div className="">
            <MdDataSaverOn className="font-bold" />
          </div>
        </div>
        <div className="mt-2">
          <h2>like by {like} people</h2>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
