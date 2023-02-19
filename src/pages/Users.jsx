import './Users.css';

import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [names, setNames] = useState([]);

  const [namesFiltered, setNamesFiltered] = useState([]);

  useEffect(() => {
    const getNames = async () => {
      const res = await axios.get(
        'https://63ef8360271439b7fe703fa3.mockapi.io/characters',
      );
      const data = res.data;
      setNames(data);
      setNamesFiltered(data);
    };

    getNames();
  }, []);

  const getFilteredUser = (keyword) => {
    const filtered = names.filter((name) => name.name.toLowerCase().includes(keyword));
    setNamesFiltered(filtered);
  };

  return (
    <main>
      <Text align="center" padding="1rem" mb={6} fontSize="3xl">
        Our alumns
      </Text>
      <Box paddingBottom="2rem">
        <input
          type="text"
          placeholder="search name"
          onChange={(ev) => getFilteredUser(ev.target.value.toLowerCase())}
        />
      </Box>
      <div className="users">
        {namesFiltered.map((person) => (
          <figure key={person.id}>
            <Text fontSize="md" fontWeight="bold">
              {person.name}
            </Text>
            <img src={person.avatar} alt={person.name} />
            <p>{person.age} yrs</p>
            <Text fontSize="md" fontWeight="bold" textTransform="uppercase">
              {person.premium ? 'Black Belt 🏅' : 'kyu 🥋'}
            </Text>
          </figure>
        ))}
      </div>
    </main>
  );
};
export default Users;
