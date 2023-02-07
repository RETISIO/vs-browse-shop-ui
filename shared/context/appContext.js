/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import globalState from './globalstate.json';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, updateState] = useState(globalState);

  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
