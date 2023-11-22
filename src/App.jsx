import React from 'react';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div className="bg-[#020617]">
      
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