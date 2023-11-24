import React from 'react';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/shared/Navbar';

const App = () => {
  return (
    <div className="px-6 py-6 bg-[#020617] ">
      <Navbar />
      {/* bg-[#020617]  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* authentication router */}
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;