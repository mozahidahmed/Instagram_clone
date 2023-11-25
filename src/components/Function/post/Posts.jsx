import React, { useEffect, useState } from "react";
import Post from "./Post";



const Posts = () => {
    const [post,setPost]=useState([])
    console.log(post)

      useEffect(()=>{
         fetch("post.json")
           .then((res) => res.json())
           .then((data) => setPost(data));


    },[])
  return (
    <div className="py-6">
      <div className="grid lg:grid-cols-2 gap-4">
        {
            post.map((data)=>(
                <Post post={data}></Post>
            ))
        }
      </div>
    </div>
  );
};

export default Posts;
