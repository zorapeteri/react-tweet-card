import React from 'react';
import svg from 'assets/TwitterLogo.svg';
import className from 'utils/className';
import css from './TwitterLogo.module.css';

const TwitterLogo = () => (
  <img
    src={svg}
    {...className(
      'react-tweet-card__twitter-logo',
      css.twitterLogo,
    )}
    alt="twitter logo"
  />
);

export default TwitterLogo;
