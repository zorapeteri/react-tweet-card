import React from 'react';
import css from './Name.module.css';
import className from '../../utils/className';

type NameProps = {
    name: string;
    clickableProfileLink?: boolean;
};

const Name = ({ name, clickableProfileLink }: NameProps) => (
  <span
    {...className(
      css.name,
      clickableProfileLink && css.clickable,
    )}
  >
    {name}
  </span>
);

export default Name;
