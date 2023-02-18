import { createContext, useContext, useEffect, useState } from 'react';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const darkTheme = localStorage.getItem('dark') === 'true';
    setDark(darkTheme);
  }, [dark]);

  const changeTheme = () => {
    const darkTheme = !dark;
    localStorage.setItem('dark', JSON.stringify(darkTheme));
    setDark(darkTheme);
  };

  const themeActive = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ themeActive, dark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const ThemeFunction = () => {
  return useContext(ThemeContext);
};
