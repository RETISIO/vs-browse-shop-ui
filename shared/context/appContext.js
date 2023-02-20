/* eslint-disable import/named */
/* eslint-disable react/jsx-no-constructed-context-values */
import { getCookie } from '@retisio/sf-api';
import {
  createContext, useContext, useState, useEffect,
} from 'react';
import globalState from './globalstate.json';
import { requestContructor } from '../helpers/api';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, updateState] = useState(globalState, '', {}, false);
  useEffect(() => {
    (async() => {
      if(!getCookie('x-anyms-id')) {
        await requestContructor('getUUID');
      }
    })();
  }, []);
  return (
    <AppContext.Provider value={{ state, updateState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
