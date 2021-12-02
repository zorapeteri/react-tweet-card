import React, { useRef } from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import useLinksAndUsernames from 'utils/useLinksAndUsernames';
import css from './Tweet.module.css';

type TweetProps = {
    tweet: string;
}

const Tweet = ({ tweet }: TweetProps) => {
  const ref = useRef(null);
  useLinksAndUsernames(ref);

  return (
    <p
      ref={ref}
      {...className(
        globalClassName('tweet'),
        css.tweet,
        tweet.length > 180 && css.longTweet,
      )}
    >
      {tweet}
    </p>
  );
};

export default Tweet;
