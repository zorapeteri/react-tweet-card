import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './Engagement.module.css';
import TwitterIcon from './Twitter';
import Emoji from './Emoji';

export type EngagementIcons = {
    replies: any;
    retweets: any;
    likes: any;
}

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
      <span>
        <icons.replies />
        {replies}
      </span>
      <span>
        <icons.retweets />
        {retweets}
      </span>
      <span>
        <icons.likes />
        {likes}
      </span>
    </div>
  );
}

export default Engagement;
