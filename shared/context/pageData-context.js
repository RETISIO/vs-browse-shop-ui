import { createContext, useContext, useState } from 'react';

const PageDataContext = createContext();

export function PageDataContextWrapper({ children }) {
    const [pageData, setPageData] = useState(null);

    return (
        <PageDataContext.Provider value={{ pageData, setPageData }}>
            {children}
        </PageDataContext.Provider>
    );
}

export function usePageDataContext() {
    return useContext(PageDataContext);
}