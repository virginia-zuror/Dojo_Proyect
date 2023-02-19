import './Footer.css';

import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { ThemeFunction } from '../Context/ColorTheme';

const Footer = () => {
  const { changeTheme } = ThemeFunction();

  return (
    <Box
      display="flex"
      flexDirection="row"
      padding="1rem"
      position="fixed"
      bottom="0%"
      w="100%"
      alignItems="center"
      justifyContent="center"
      gap={5}
      bgGradient="radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )"
    >
      <button className="btnColor" onClick={() => changeTheme()}>
        {localStorage.getItem('color') === 'light' ? (
          <Image
            height="45px"
            src="https://res.cloudinary.com/do7bnejaz/image/upload/v1676756529/CobraKai%20_Gym/Cobra-Kai-Emblema_rw71dz.png"
            alt=" button color to dark"
          />
        ) : (
          <Image
            height="50px"
            src="https://res.cloudinary.com/do7bnejaz/image/upload/v1676756942/CobraKai%20_Gym/miyagi-do-karate-logo-AEB6C17D70-seeklogo.com_xsvwub.png"
            alt="button color to ligth"
          />
        )}
      </button>
      <Text fontSize="lg" display="flex" alignItems="center" color="#FAF9F8">
        Powered by Virginia{' '}
      </Text>{' '}
      <Text fontSize="2xl">🐱‍👤</Text>
    </Box>
  );
};

export default Footer;
