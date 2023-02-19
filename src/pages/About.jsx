import './About.css';

import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        textAlign="center"
        fontSize="2xl"
        textTransform="uppercase"
        fontWeight="bold"
        paddingBottom={20}
      >
        Next activities
      </Text>
      <Grid templateColumns="repeat(3, 300px)" gap={100}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="Highlight">
            Special class in the beach: Tues. 21 Feb. 23
          </Text>
          <Text noOfLines={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt
            tincidunt euismod. Fusce at velit quam. Integer et urna volutpat purus tempor
            tincidunt nec nec risus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Vivamus nunc quam, lacinia varius nunc ut, commodo mattis erat.
            Nulla facilisi. Fusce congue arcu non ex dignissim, non finibus lacus
            consequat. Morbi bibendum nulla arcu, ac consectetur tortor auctor
            condimentum. Sed in ornare mi. In sed nunc eget est feugiat suscipit.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="Highlight">
            World Karate Federation - COVID Protocol Changes
          </Text>
          <Text noOfLines={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt
            tincidunt euismod. Fusce at velit quam. Integer et urna volutpat purus tempor
            tincidunt nec nec risus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Vivamus nunc quam, lacinia varius nunc ut, commodo mattis erat.
            Nulla facilisi. Fusce congue arcu non ex dignissim, non finibus lacus
            consequat. Morbi bibendum nulla arcu, ac consectetur tortor auctor
            condimentum. Sed in ornare mi. In sed nunc eget est feugiat suscipit.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          <Text fontSize="xl" textAlign="center" fontWeight="bold" color="Highlight">
            Youth League 2023 - Get prepared!
          </Text>
          <Text noOfLines={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt
            tincidunt euismod. Fusce at velit quam. Integer et urna volutpat purus tempor
            tincidunt nec nec risus. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Vivamus nunc quam, lacinia varius nunc ut, commodo mattis erat.
            Nulla facilisi. Fusce congue arcu non ex dignissim, non finibus lacus
            consequat. Morbi bibendum nulla arcu, ac consectetur tortor auctor
            condimentum. Sed in ornare mi. In sed nunc eget est feugiat suscipit.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
