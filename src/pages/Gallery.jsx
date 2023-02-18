import './Gallery.css';

import { Grid, GridItem, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const APIKEYUNSPLASH = 'tXe2jU3nQr1m-akKYxCODNfgTUgvZzCVcny6yIa7YDw';

  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=karate&client_id=${APIKEYUNSPLASH}`,
      )
      .then((res) => setPhotos(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <main>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} paddingBottom="100px">
        {photos.map((photo) => (
          <GridItem w="100%" h="300" key={photo.id}>
            <Image
              src={photo.urls.small}
              alt={photo.lt_description}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Text textAlign="center" fontSize="md" fontWeight="semibold">
              {photo.created_at.slice(0, 10)}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </main>
  );
};

export default Gallery;
