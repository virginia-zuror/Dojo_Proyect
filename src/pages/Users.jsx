import './Users.css';

import { Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [names, setNames] = useState([]);

  const getNames = async () => {
    const res = await axios.get('https://63ef8360271439b7fe703fa3.mockapi.io/characters');
    const data = res.data;
    setNames(data);
  };
  useEffect(() => {
    getNames();
  }, []);

  return (
    <main>
      <Text align="center" padding="20px" mb={6} fontSize="3xl">
        Our alumns
      </Text>
      <div className="users">
        {names.map((person) => (
          <figure key={person.id}>
            <Text fontSize="md" fontWeight="bold">
              {person.name}
            </Text>
            <img src={person.avatar} alt={person.name} />
            <p>{person.age} yrs</p>
            <Text fontSize="md" fontWeight="bold" textTransform="uppercase">
              {person.premium ? 'Champion' : 'In training'}
            </Text>
          </figure>
        ))}
      </div>
    </main>
  );
};
export default Users;
