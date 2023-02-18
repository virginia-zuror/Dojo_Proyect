import './Home.css';

import { Box, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';

import { userAuth } from '../Context/UserContext';

const Home = () => {
  const inputRef = useRef(null);
  const { login } = userAuth();

  return (
    <main>
      {!localStorage.getItem('user') && (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            bgGradient={[
              'linear(to-tr, teal.300, yellow.400)',
              'linear(to-t, blue.200, teal.500)',
              'linear(to-b, orange.100, purple.300)',
            ]}
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome!
          </Text>
          <h4>Login to have complete access.</h4>
          <input type="text" ref={inputRef} placeholder="Enter a nickname" />
          <button
            onClick={() => {
              login(inputRef.current.value);
            }}
          >
            Login
          </button>
        </Box>
      )}
    </main>
  );
};

export default Home;
