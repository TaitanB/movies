import React from 'react';
import { Link } from 'react-router-dom';

import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.not_found}>
      Page is not found :( <br />
      Go to <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
