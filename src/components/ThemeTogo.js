import React, { useContext, useEffect } from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { themeContext } from './ThemeContext';

const ThemeTogo = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const changeTheme = () => {
    theme.dispatch({ type: 'toggle' });
  };

  useEffect(() => {
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode) {
      theme.dispatch({ type: 'setMode', payload: storedMode === 'dark' });
    }
  }, [theme]); // Include 'theme' in the dependency array

  return (
    <div id='themeTogo' onClick={changeTheme}>
      <HiMoon />
      <CgSun />
      <div id='themeTogoButton' style={darkMode ? { left: '2px' } : { right: '2px' }}></div>
    </div>
  );
};

export default ThemeTogo;
