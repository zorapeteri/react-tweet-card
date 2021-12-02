import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './Username.module.css';

type UsernameProps = {
    username: string;
};

const Username = ({ username }: UsernameProps) => (
  <span
    {...className(
      globalClassName('author-username'),
      css.username,
    )}
  >
    @
    {username}
  </span>
);

export default Username;
