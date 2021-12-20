import React from 'react';
import UserDetails from 'components/UserDetails';
import Details from 'components/Details';
import Tweet from 'components/Tweet';
import Container from 'components/Container';
import TwitterLogo from 'components/TwitterLogo';
import Engagement from 'components/Engagement';
import { ThemeOption, TweetCardColors } from './themes';
import './index.css';

type TweetCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    name: string,
    username: string,
    image: string,
    isVerified?: boolean,
    isProtected?: boolean,
  };
  engagement?: {
    replies?: number;
    retweets?: number;
    likes?: number;
  };
  tweet: string;
  time: Date | string;
  source: string;
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
}

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
  ...rest
} : TweetCardProps) => (
  <Container {...({ ...rest })}>
    <UserDetails {...({ ...author, clickableProfileLink })} />
    <TwitterLogo {...({ permalink })} />
    <Tweet {...({ tweet })} />
    {showDetails && <Details {...({ time, source, permalink })} />}
    {showEngagement && <Engagement {...({ ...engagement, emojis })} />}
  </Container>
);

export default TweetCard;
