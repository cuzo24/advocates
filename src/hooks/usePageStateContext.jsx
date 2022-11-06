import { useContext } from 'react';

// Context
import { PageStateContext } from '../contexts/PageContext.jsx';

export function usePageStateContext() {
  const pageState = useContext(PageStateContext);

  if (!pageState) {
    throw new Error('The PageStateContext must be used within a PageStateContext Provider');
  }

  return pageState;
}