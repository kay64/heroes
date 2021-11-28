import React from 'react';

import { Link } from 'react-router-dom';

import classes from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <h1>404</h1>
        <div className={classes.image} />

        <h3>Look like you're lost</h3>

        <p>The page you are looking for not available!</p>

        <Link to="/" className={classes.link}>
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
