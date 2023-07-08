import React, { useContext } from 'react';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { ThemeContext } from './ThemeContext';

const ThemeTogo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div id='themeTogo' onClick={toggleTheme}>
      <HiMoon className={theme === 'light' ? 'theme-icon active' : 'theme-icon'} />
      <CgSun className={theme === 'dark' ? 'theme-icon active' : 'theme-icon'} />
      <div id='themeTogoButton' className={theme === 'light' ? 'theme-button light' : 'theme-button dark'}
        onClick={toggleTheme}
      ></div>
    </div>
  );
};

export default ThemeTogo;
