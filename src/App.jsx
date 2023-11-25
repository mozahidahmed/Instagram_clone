import React from 'react';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/shared/Navbar';
import Users from './components/Function/people/Users';
import MyProfile from './components/Function/myProfile/MyProfile';

const App = () => {
  return (
    <div className="px-6 py-6  ">
      <Navbar />
      {/* bg-[#020617]  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allusers" element={<Users />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>

        {/* authentication router */}
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;