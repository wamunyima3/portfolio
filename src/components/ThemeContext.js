import React, { createContext, useReducer } from 'react';

export const themeContext = createContext();

const initialState = {darkMode:true};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      const newMode = !state.darkMode;
      localStorage.setItem('themeMode', newMode ? 'dark' : 'light');
      return { darkMode: newMode };
    case 'setMode':
      return { darkMode: action.payload };
    default:
      return state;
  }
};


export const ThemeProvider = (props) => {
  const storedMode = localStorage.getItem('themeMode');
  const [state, dispatch] = useReducer(themeReducer, { darkMode: storedMode === 'dark' });

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
