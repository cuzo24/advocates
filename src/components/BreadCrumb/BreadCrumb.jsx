import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import {Container, Wrapper} from './BreadCrumb.styles.js';

export default function BreadCrumb(props) {
  const links = props.path.map((segment, idx) => {
    if (segment.url) {
      return (
        <Link className="breadcrumb-item link" key={`i${idx}n${segment.name}`} to={segment.url}>
          {segment.name}
        </Link>
      );
    }

    return (
      <div className="breadcrumb-item" key={`i${idx}n${segment.name}`}>
        {segment.name}
      </div>
    );
  });

  return (
    <Wrapper>
      <Container>
        {links}
      </Container>
    </Wrapper>
  );
}
