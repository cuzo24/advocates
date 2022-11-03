import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Home
      <Link to="/advocates">Go to advocates</Link>
    </div>
  );
}