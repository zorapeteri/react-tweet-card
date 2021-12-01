import React from 'react';
import css from './Name.module.css';

type NameProps = {
    name: string;
    clickableProfileLink?: boolean;
};

const Name = ({ name, clickableProfileLink }: NameProps) => (
  <span className={[css.name, clickableProfileLink && css.clickable].filter(Boolean).join(' ')}>
    {name}
  </span>
);

export default Name;
