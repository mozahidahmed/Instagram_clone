import React, { useEffect, useState } from "react";
import MyPost from "./MyPost";


const MyPosts = () => {
  const [post, setPost] = useState([]);
  console.log(post);

  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className="py-6">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
        {post.map((data) => (
          <MyPost post={data}></MyPost>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
