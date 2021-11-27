import React from 'react';
import svg from '../../assets/TwitterLogo.svg';
import css from './TwitterLogo.module.css';

const TwitterLogo = () => (
  <img src={svg} className={css.twitterLogo} alt="twitter logo" />
);

export default TwitterLogo;
