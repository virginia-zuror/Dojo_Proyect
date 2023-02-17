import './Users.css';

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
    <main className="users">
      {names.map((person) => (
        <figure key={person.id}>
          <h3>{person.name}</h3>
          <img src={person.avatar} alt={person.name} />
          <p>{person.age} yrs</p>
          <h4>{person.premium && 'Is premium'}</h4>
        </figure>
      ))}
    </main>
  );
};
export default Users;
