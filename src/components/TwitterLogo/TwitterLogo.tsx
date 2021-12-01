import React from 'react';
import svg from 'assets/TwitterLogo.svg';
import className from 'utils/className';
import css from './TwitterLogo.module.css';

type TwitterLogoProps = {
  permalink?: string;
}

const TwitterLogo = ({ permalink }: TwitterLogoProps) => (
  <a
    href={permalink || ''}
    target="_blank"
    rel="noreferrer"
    title="Open on Twitter"
  >
    <img
      src={svg}
      {...className(
        'react-tweet-card__twitter-logo',
        css.twitterLogo,
      )}
      alt="twitter logo"
    />
  </a>

);

export default TwitterLogo;
