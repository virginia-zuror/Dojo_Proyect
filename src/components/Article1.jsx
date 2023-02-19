import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Article1 = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      alignItems="center"
      justifyContent="center"
      paddingTop="2rem"
      paddingBottom="5rem"
      paddingLeft="10%"
      paddingRight="10%"
    >
      <Text fontSize="2xl">We are open!</Text>
      <Text textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in ipsum
        tincidunt, aliquet augue quis, faucibus nisi. Mauris purus quam, iaculis sed urna
        in, euismod auctor nibh. In maximus, erat sed porttitor euismod, mauris enim
        viverra ante, in vulputate enim libero eu purus. Nullam eu ante in nulla elementum
        vestibulum. Ut posuere interdum tellus. Aliquam ultrices, lorem id consectetur
        aliquam, risus libero rutrum mi, ut pharetra elit nisl id turpis. Maecenas eu
        rhoncus nisl. Morbi auctor urna vel felis mollis, nec consequat ex tempor.
        Suspendisse eu magna consequat, faucibus ante eget, egestas leo. Nunc egestas
        massa risus, quis lobortis augue tristique nec. Pellentesque euismod nisl eget
        semper vulputate. Etiam sagittis velit in blandit malesuada. Integer diam ante,
        scelerisque non nulla sit amet, consectetur pellentesque nibh. Mauris suscipit
        mattis leo vitae ullamcorper. Pellentesque in scelerisque purus. Fusce malesuada
        facilisis suscipit. Vestibulum et nisl pharetra, sollicitudin tortor vitae,
        dapibus libero. Ut sagittis erat ut erat tristique euismod. Pellentesque tempus
        varius magna, vel vestibulum erat tincidunt in. Cras euismod aliquet metus, eget
        sodales neque dapibus blandit. Sed elit arcu, condimentum vel tristique in,
        imperdiet eu est. Suspendisse ligula mi, tincidunt quis viverra nec, laoreet eu
        ante. Integer quis dolor aliquam, malesuada erat at, dictum eros. Aenean leo
        tortor, convallis ac tellus feugiat, ullamcorper ornare dui. Pellentesque
        condimentum tellus lacus, eget tristique turpis finibus id. Vivamus a metus eget
        purus semper consequat vitae vitae felis. Donec pretium, massa nec elementum
        tristique, dui odio posuere nunc, sit amet egestas enim urna ac nisi. Praesent
        turpis enim, aliquet venenatis leo ut, auctor finibus velit. Suspendisse ac augue
        auctor, faucibus quam non, egestas metus. Nulla vestibulum fermentum sapien eu
        convallis. Pellentesque ultrices eleifend nibh, ut pellentesque orci aliquam sed.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Sed rhoncus sodales volutpat. Sed fermentum lorem at quam varius,
        sed viverra ante posuere. Fusce in iaculis leo, non scelerisque dui. Praesent
        efficitur odio pharetra tempor dapibus. Integer interdum tempor nunc ut placerat.
        Praesent pellentesque bibendum metus, gravida aliquet mauris rhoncus vel. Ut eget
        erat sapien. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam imperdiet quam nunc, vitae vulputate metus suscipit
        ut. Phasellus vel dui semper, volutpat lacus sit amet, cursus turpis. Donec
        dapibus, arcu in accumsan vulputate, quam sem vestibulum nisl, sed posuere eros
        nulla ac erat. Maecenas eget lectus eget lectus vestibulum aliquam. Aenean a
        faucibus metus, et suscipit orci. Mauris turpis nulla, elementum eu diam ut,
        mattis malesuada dolor.
      </Text>
      <Image
        src="https://res.cloudinary.com/do7bnejaz/image/upload/v1676838259/CobraKai%20_Gym/Que_CC_81-ver-en-Japo_CC_81n_ka56ja.jpg"
        alt="Japan landscape"
        minWidth="100%"
        maxHeight="250px"
        objectFit="cover"
      />
    </Box>
  );
};

export default Article1;
