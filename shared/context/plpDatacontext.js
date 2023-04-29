/* eslint-disable linebreak-style */
import { createContext, useContext, useState } from 'react';

const PLPDataContext = createContext();

export function PLPDataContextWrapper({ children }) {
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [searchResultData, setSearchResultData] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PLPDataContext.Provider value={{
      offset, setOffset, products, setProducts, productCount, setProductCount, searchResultData, setSearchResultData,
    }}
    >
      {children}
    </PLPDataContext.Provider>
  );
}

export function usePLPDataContext() {
  return useContext(PLPDataContext);
}
