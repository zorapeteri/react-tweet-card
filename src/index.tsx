import React from 'react';
import UserDetails from 'components/UserDetails';
import Details from 'components/Details';
import Tweet from 'components/Tweet';
import Container from 'components/Container';
import TwitterLogo from 'components/TwitterLogo';
import './index.css';
import { ThemeOption, TweetCardColors } from 'themes';

type TweetCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    name: string,
    username: string,
    image: string,
    isVerified?: boolean,
    isProtected?: boolean,
  };
  tweet: string;
  time: Date | string;
  source: string;
  permalink?: string;
  clickableProfileLink?: boolean;
  theme?: ThemeOption;
  colors?: TweetCardColors;
}

const TweetCard = ({
  author, tweet, time, source, permalink, clickableProfileLink, ...rest
} : TweetCardProps) => (
  <Container {...({ ...rest })}>
    <UserDetails {...({ ...author, clickableProfileLink })} />
    <TwitterLogo {...({ permalink })} />
    <Tweet {...({ tweet })} />
    <Details {...({ time, source, permalink })} />
  </Container>
);

export default TweetCard;
