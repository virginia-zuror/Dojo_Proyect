import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (data) => {
    setUser(data);
    /* navigate('/users'); */ //quitamos que abra automaticamente users.
    localStorage.setItem('user', data); //al hacer login tambien setea en la memoria local el usuario
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('color');
    navigate('/');
    localStorage.removeItem('user'); //al hacer logout borra el usuario de la memoria local
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(UserContext);
};
