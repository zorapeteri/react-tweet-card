import React from 'react';
import css from './Tweet.module.css';
import className from '../../utils/className';

type TweetProps = {
    text: string;
}

const Tweet = ({ text }: TweetProps) => (
  <p
    {...className(
      css.tweet,
      text.length > 180 && css.longTweet,
    )}
  >
    {text}
  </p>
);

export default Tweet;
