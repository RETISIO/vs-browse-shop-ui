/* eslint-disable linebreak-style */
import React, { createContext, useContext, useState } from 'react';

const MiniCartContext = createContext();

export function MiniCartContextWrapper({ children }) {
  const miniCartDataObj = {miniCartData: {}, showMiniCart: false, itemAdded: false};
  const [miniCartDetails, setMiniCartDetails] = useState(miniCartDataObj);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MiniCartContext.Provider value={{ miniCartDetails, setMiniCartDetails }}>
      {children}
    </MiniCartContext.Provider>
  );
}

export function useMiniCartDataContext() {
  return useContext(MiniCartContext);
}
