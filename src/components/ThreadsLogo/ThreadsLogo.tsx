import React from 'react';
import svg from 'assets/ThreadsLogo.svg';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import { TweetCardProps } from 'index';
import css from './ThreadsLogo.module.css';

type ThreadsLogoProps = Pick<TweetCardProps, 'permalink' | 'theme'>;

const ThreadsLogo = ({ permalink, theme }: ThreadsLogoProps) => {
  const Tag = permalink ? 'a' : 'div';
  const linkProps = {
    href: permalink,
    target: '_blank',
    rel: 'noreferrer',
    'aria-label': 'View thread on thread.net',
  };
  const divProps = { 'aria-hidden': true };

  return (
    <Tag {...(permalink ? linkProps : divProps)}>
      <img
        src={svg}
        {...className(globalClassName('thread-logo'), css.threadsLogo, theme !== 'light' && css.themeDark)}
        alt=""
      />
    </Tag>
  );
};

export default ThreadsLogo;
