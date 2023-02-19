import './Header.css';

import { Heading, Image, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeFunction } from '../Context/ColorTheme';
import { userAuth } from '../Context/UserContext';

const Header = () => {
  const { logout } = userAuth();

  const [imageColor, setImageColor] = useState();
  const { changeTheme } = ThemeFunction();
  useEffect(() => {
    console.log(localStorage.getItem('color'));
    localStorage.getItem('color') == 'dark' //deberia cambiar al cambiar el localstorage pero va un paso por detras
      ? setImageColor(
          'https://res.cloudinary.com/do7bnejaz/image/upload/v1676756657/CobraKai%20_Gym/cobra-kai-logo-01BAA48FFDfotoali.net-_dcngxp.png',
        )
      : setImageColor(
          'https://res.cloudinary.com/do7bnejaz/image/upload/v1676800474/CobraKai%20_Gym/pegatinas-coches-motos-cobra-kai-miyagi-karate-dojo_cvfevu.png',
        );
  }, [changeTheme]);

  return (
    <Heading
      maxW="100vw"
      minH="4rem"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="inherit"
    >
      <UnorderedList
        w="100%"
        padding="1rem 2rem"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
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
            <Image height="60px" src={imageColor} alt="logout button" />
            <Text fontSize={15}>Logout</Text>
          </button>
        )}
      </UnorderedList>
    </Heading>
  );
};

export default Header;
