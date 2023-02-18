import './About.css';

import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <main>
      <Text textAlign="center" fontSize="2xl" textTransform="uppercase" fontWeight="bold">
        Next activities
      </Text>
      <Box>
        <Text>Special class in the beach: Tues. 21 Feb. 23</Text>
      </Box>
    </main>
  );
};

export default About;
