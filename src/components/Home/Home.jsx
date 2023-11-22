import React from 'react';

const Home = () => {
    return (
      <div>
        <div className="h-screen grid text-white justify-center items-center">
          <a href='/signup' class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sign_In Or Create_Account
          </a>
        </div>
      </div>
    );
};

export default Home;