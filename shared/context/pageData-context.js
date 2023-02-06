import { createContext, useContext, useState } from 'react';

const PageDataContext = createContext();

export function PageDataContextWrapper({ children }) {
  const [pageData, setPageData] = useState(null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PageDataContext.Provider value={{ pageData, setPageData }}>
      {children}
    </PageDataContext.Provider>
  );
}

export function usePageDataContext() {
  return useContext(PageDataContext);
}
