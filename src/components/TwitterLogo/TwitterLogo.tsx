import React from 'react';
import svg from 'assets/TwitterLogo.svg';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './TwitterLogo.module.css';

type TwitterLogoProps = {
  permalink?: string;
}

const TwitterLogo = ({ permalink }: TwitterLogoProps) => {
  const Tag = permalink ? 'a' : 'div';

  return (
    <Tag
      {...(permalink ? {
        href: permalink,
        target: '_blank',
        rel: 'noreferrer',
        'aria-label': 'View tweet on twitter.com',
      } : {
        'aria-hidden': true,
      })}
    >
      <img
        src={svg}
        {...className(
          globalClassName('twitter-logo'),
          css.twitterLogo,
        )}
        alt=""
      />
    </Tag>
  );
};

export default TwitterLogo;
