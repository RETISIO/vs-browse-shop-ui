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
  const [show, setShow] = useState(false);
  const [isLogged, setisLogged] = useState(false);
  const [openReset, updateOpenReset] = useState(false);
  const [loader, setLoader] = useState(false);
  const [noReload, setNoReload] = useState(false);

  useEffect(() => {
    (async() => {
      if (!getCookie('x-anyms-id')) {
        await requestContructor('getUUID');
      }
    })();
  }, []);

  /* Check for Mobile View */
  const [isMobileView, setIsMobileView] = useState(false);
  const checkForMobileView = () => {
    const width = window?.innerWidth || document?.documentElement?.clientWidth;
    if (width < 768 && !isMobileView) setIsMobileView(true);
    else if (width >= 768 && isMobileView) setIsMobileView(false);
  };
  useEffect(() => {
    if (window) {
      window?.addEventListener('resize', checkForMobileView);
      checkForMobileView();
    }
    return () => {
      if (window) {
        window.removeEventListener('resize', checkForMobileView);
      }
    };
  }, []);
  /* Check for Mobile View ends */

  return (
    <AppContext.Provider
      value={{
        state,
        updateState,
        show,
        setShow,
        isLogged,
        setisLogged,
        openReset,
        updateOpenReset,
        loader,
        setLoader,
        noReload,
        setNoReload,
        isMobileView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
