import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>Page not found!</p>
      <Link to="/">Home</Link>
    </div>
  );
};
