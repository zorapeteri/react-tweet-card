import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import { TweetCardProps } from 'index';
import css from './Thread.module.css';

type TweetProps = Pick<TweetCardProps, 'tweet'>;

const Thread = ({ tweet }: TweetProps) => (
  <p
    {...className(
      globalClassName('tweet'),
      css.tweet,
      tweet.length > 180 && css.longTweet
    )}
  >
    {tweet}
  </p>
);

export default Thread;
