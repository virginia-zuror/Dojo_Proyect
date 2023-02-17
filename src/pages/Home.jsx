import './Home.css';

import React, { useRef } from 'react';

import { userAuth } from '../Context/UserContext';

const Home = () => {
  const inputRef = useRef(null);
  const { login } = userAuth();

  return (
    <main>
      {!localStorage.getItem('user') && (
        <div className="login">
          <h1>Welcome!</h1>
          <h4>Login to have complete access to the users.</h4>
          <input type="text" ref={inputRef} placeholder="Enter a nickname" />
          <button
            onClick={() => {
              login(inputRef.current.value);
            }}
          >
            Login
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
