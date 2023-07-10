import React from 'react';
import UserDetails from 'components/UserDetails';
import Details from 'components/Details';
import Tweet from 'components/Tweet';
import Container from 'components/Container';
import TwitterLogo from 'components/TwitterLogo';
import Engagement from 'components/Engagement';
import './index.css';
import TweetImage from 'components/TweetImage';
import ThreadsLogo from 'components/ThreadsLogo';
import { ThemeOption, TweetCardColors } from './themes';
import Thread from 'components/Thread/Thread';

export type TweetCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    name: string;
    username: string;
    image: string;
    isVerified?: boolean;
    isProtected?: boolean;
    isBusiness?: boolean;
    isGovernment?: boolean;
  };
  engagement?: {
    replies?: number;
    retweets?: number;
    likes?: number;
  };
  tweet: string;
  tweetImages?: string[];
  time: Date | string;
  source?: string;
  permalink?: string;
  clickableProfileLink?: boolean;
  theme?: ThemeOption;
  colors?: TweetCardColors;
  gradientBackground?: boolean;
  blurredBackground?: boolean;
  fitInsideContainer?: boolean;
  showDetails?: boolean;
  showEngagement?: boolean;
  emojis?: boolean;
  threads: boolean;
};

const TweetCard = ({
  author,
  tweet,
  time,
  source,
  permalink,
  engagement,
  clickableProfileLink,
  showDetails = true,
  showEngagement = true,
  emojis,
  tweetImages,
  threads,
  ...rest
}: TweetCardProps) => (
  <Container {...{ ...rest }}>
    <UserDetails {...{ ...author, clickableProfileLink, threads }} />
    {threads ? <ThreadsLogo {...{ permalink, ...rest }} /> : <TwitterLogo {...{ permalink }} />}
    {threads ? <Thread {... { tweet }} /> : <Tweet {...{ tweet }} />}
    {(tweetImages?.length ?? false) > 0 && <TweetImage {...{ tweetImages }} />}
    {showDetails && <Details {...{ time, source, permalink }} />}
    {showEngagement && <Engagement {...{ ...engagement, emojis, threads }} />}
  </Container>
);

export default TweetCard;
