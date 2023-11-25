import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("flow.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
   

  return (
    <div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 py-6 gap-4">
        {data.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
