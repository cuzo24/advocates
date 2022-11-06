import React from 'react';

// Hooks
import { usePageApiContext } from '../../hooks/usePageApiContext.jsx';

// Styles
import { Button } from './PaginationButton.styles.js';

export default function PaginationButton(props) {
  const api = usePageApiContext();

  return (
    <Button
      active={props.active}
      onClick={props.active ? undefined : (() => api.setPage(props.pageNumber))}
    >
      <span className="pagination-button__number">{props.pageNumber}</span>
    </Button>
  );
}