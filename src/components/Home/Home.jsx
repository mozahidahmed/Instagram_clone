import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from './../../firebase.init';
import SideNavbar from './SideNavbar';
import Stories from './Stories';

const Home = () => {
  const [user] = useAuthState(auth);
  
    return (
      <div>
        <Stories/>
      </div>
    );
};

export default Home;