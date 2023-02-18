import './Footer.css';

import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

/* import { ThemeFunction } from '../Context/ColorTheme'; */

const Footer = () => {
 /*  const { changeTheme } = ThemeFunction(); */

  return (
    <Box
      backgroundColor="WindowFrame"
      display="flex"
      flexDirection="row"
      padding="1rem"
      position="fixed"
      bottom="0%"
      w="100%"
      alignItems="center"
      justifyContent="center"
    >
     {/*  <button onClick={() => changeTheme()}>
        <Image
          height="40px"
          src="https://res.cloudinary.com/do7bnejaz/image/upload/v1676756529/CobraKai%20_Gym/Cobra-Kai-Emblema_rw71dz.png"
        />
      </button> */}
      <Text fontSize="lg" color="whiteAlpha.900" display="flex" alignItems="center">
        Powered by Virginia <Text fontSize="2xl">🐱‍👤</Text>
      </Text>
    </Box>
  );
};

export default Footer;
