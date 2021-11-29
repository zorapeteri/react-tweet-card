import React from 'react';
import svg from '../../assets/TwitterLogo.svg';
import css from './TwitterLogo.module.css';

const TwitterLogo = () => (
  <img
    src={svg}
    className={['react-tweet-card__twitter-logo', css.twitterLogo].join(' ')}
    alt="twitter logo"
  />
);

export default TwitterLogo;
