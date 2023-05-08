import React from 'react';

export const DarkModeContext = React.createContext(false);

export const DarkModeProvider = ({ children, value }) => {
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};