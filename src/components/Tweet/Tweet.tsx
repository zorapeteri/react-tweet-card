import React from 'react';
import className from 'utils/className';
import css from './Tweet.module.css';

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
