import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import formatEngagement from 'utils/formatEngagement';
import css from './Engagement.module.css';
import TwitterIcon from './Twitter';
import Emoji from './Emoji';

type EngagementProps = {
    replies?: number;
    retweets?: number;
    likes?: number;
    emojis?: boolean;
}

function Engagement({
  replies = 0, retweets = 0, likes = 0, emojis,
}: EngagementProps) {
  if (!(replies || retweets || likes)) {
    return null;
  }

  const icons = emojis ? Emoji : TwitterIcon;

  return (
    <div
      {...className(
        css.engagement,
        globalClassName('engagement-container'),
      )}
    >
      <span role="img" aria-label={`${replies} ${replies === 1 ? 'reply' : 'replies'}`}>
        <icons.replies />
        {formatEngagement(replies)}
      </span>
      <span role="img" aria-label={`${retweets} ${retweets === 1 ? 'retweet' : 'retweets'}`}>
        <icons.retweets />
        {formatEngagement(retweets)}
      </span>
      <span role="img" aria-label={`${likes} ${likes === 1 ? 'like' : 'likes'}`}>
        <icons.likes />
        {formatEngagement(likes)}
      </span>
    </div>
  );
}

export default Engagement;
