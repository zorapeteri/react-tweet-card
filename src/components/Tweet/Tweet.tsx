import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './Tweet.module.css';

type TweetProps = {
    tweet: string;
}

const Tweet = ({ tweet }: TweetProps) => (
  <p
    {...className(
      globalClassName('tweet'),
      css.tweet,
      tweet.length > 180 && css.longTweet,
    )}
  >
    {tweet}
  </p>
);

export default Tweet;
