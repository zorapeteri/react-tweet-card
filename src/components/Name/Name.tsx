import React from 'react';
import className from 'utils/className';
import css from './Name.module.css';

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
