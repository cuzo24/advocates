import React, { useState, createContext, useMemo } from 'react';

export const PageApiContext = createContext(null);
export const PageStateContext = createContext(null);

export function PageContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const api = useMemo(() => {
    return {
      decrement: () => {
        if (page <= 1) return;
        setPage(prevPage => prevPage - 1);
      },
      increment: () => {
        if (page >= totalPages) return;
        setPage(prevPage => prevPage + 1);
      },
      firstPage: () => {
        if (page <= 1) return;
        setPage(1);
      },
      lastPage: () => {
        if (page >= totalPages) return;
        setPage(totalPages);
      },
      setPage,
      setTotalPages
    };
  }, [page, totalPages]);

  return (
    <PageStateContext.Provider value={{ page, totalPages }}>
      <PageApiContext.Provider value={api}>
        {children}
      </PageApiContext.Provider>
    </PageStateContext.Provider>
  );
}