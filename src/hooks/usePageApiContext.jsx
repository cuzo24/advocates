import { useContext } from 'react';

// Context
import { PageApiContext } from '../contexts/PageContext.jsx';

export function usePageApiContext() {
  const api = useContext(PageApiContext);

  if (!api) {
    throw new Error('The PageApiContext must be used within a PageApiContext Provider');
  }

  return api;
}