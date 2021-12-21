import React from 'react';
import svg from 'assets/TwitterLogo.svg';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './TwitterLogo.module.css';

type TwitterLogoProps = {
  permalink?: string;
}

const TwitterLogo = ({ permalink }: TwitterLogoProps) => (
  <a
    href={permalink || ''}
    target="_blank"
    rel="noreferrer"
    aria-hidden={!permalink}
    aria-label={permalink && 'View tweet on twitter.com'}
  >
    <img
      src={svg}
      {...className(
        globalClassName('twitter-logo'),
        css.twitterLogo,
      )}
      alt=""
    />
  </a>

);

export default TwitterLogo;
