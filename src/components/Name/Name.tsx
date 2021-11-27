import React from 'react';
import css from './Name.module.css';

type NameProps = {
    name: string;
};

const Name = ({ name }: NameProps) => (
  <span className={css.name}>{name}</span>
);

export default Name;
