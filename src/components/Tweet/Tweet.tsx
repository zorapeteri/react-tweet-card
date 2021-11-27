import React from 'react';
import css from './Tweet.module.css';

type TweetProps = {
    text: string;
}

const Tweet = ({ text }: TweetProps) => (
  <p className={css.tweet}>
    {text}
  </p>
);

export default Tweet;
