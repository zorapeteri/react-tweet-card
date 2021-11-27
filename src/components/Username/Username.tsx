import React from 'react';
import css from './Username.module.css';

type UsernameProps = {
    username: string;
};

const Username = ({ username }: UsernameProps) => (
  <span className={css.username}>
    @
    {username}
  </span>
);

export default Username;
