import React from 'react';

// Hooks
import { usePageApiContext } from '../../hooks/usePageApiContext.jsx';

// Styles
import { Button } from './PaginationButton.styles.js';

export default function PaginationButton(props) {
  const api = usePageApiContext();

  if (props.children) {
    return (
      <Button
        icon={props.icon}
        navigation={props.navigation}
        available={props.available}
        onClick={props.first ? () => api.firstPage() : () => api.lastPage()}
      >
        <div className="pagination-button__svg">
          {props.children}
        </div>
      </Button>
    );
  }

  if (props.navigation) {
    return (
      <Button
        navigation={props.navigation}
        available={props.available}
        onClick={props.previous ? () => api.decrement() : () => api.increment()}
      >
        <span className="pagination-button__text">{props.text}</span>
      </Button>
    );
  }

  return (
    <Button
      active={props.active}
      onClick={props.active ? undefined : (() => api.setPage(props.pageNumber))}
    >
      <span className="pagination-button__number">{props.pageNumber}</span>
    </Button>
  );
}