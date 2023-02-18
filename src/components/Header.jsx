import './Header.css';

import { Heading, Image, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { userAuth } from '../Context/UserContext';

const Header = () => {
  const { logout } = userAuth();
  return (
    <Heading
      maxW="100vw"
      minH="4rem"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="WindowFrame"
    >
      <UnorderedList
        w="100%"
        padding="1rem 2rem"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        color="whiteAlpha.900"
      >
        <li>
          <NavLink to={''}>Home</NavLink>
        </li>
        {localStorage.getItem('user') && (
          <li>
            <NavLink to={'gallery'}>Gallery</NavLink>
          </li>
        )}
        {localStorage.getItem('user') && (
          <li>
            <NavLink to={'about'}>About</NavLink>
          </li>
        )}
        {localStorage.getItem('user') && (
          <li>
            <NavLink to={'users'}>Users</NavLink>
          </li>
        )}
        {localStorage.getItem('user') && (
          <button onClick={() => logout()}>
            <Image
              height="60px"
              src="https://res.cloudinary.com/do7bnejaz/image/upload/v1676756657/CobraKai%20_Gym/cobra-kai-logo-01BAA48FFDfotoali.net-_dcngxp.png"
              alt="logout button"
            />
          </button>
        )}
      </UnorderedList>
    </Heading>
  );
};

export default Header;
