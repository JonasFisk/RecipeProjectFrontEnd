import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>Sidan finns inte!</p>
      <Link to="/">Hem</Link>
    </div>
  );
};
