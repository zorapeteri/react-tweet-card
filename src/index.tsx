import React from 'react';
import UserDetails from 'components/UserDetails';
import Details from 'components/Details';
import Tweet from 'components/Tweet';
import Container from 'components/Container';
import TwitterLogo from 'components/TwitterLogo';
import './index.css';

type TweetCardProps = React.HTMLAttributes<HTMLDivElement> & {
  author: {
    name: string,
    username: string,
    image: string,
  },
  tweet: string,
  time: Date | string,
  source: string,
  permalink?: string,
  clickableProfileLink?: boolean,
  gradientBackground?: boolean,
  transparentBackground?: boolean,
}

const TweetCard = ({
  author, tweet, time, source, permalink, clickableProfileLink,
  gradientBackground, transparentBackground, ...rest
} : TweetCardProps) => (
  <Container {...({ gradientBackground, transparentBackground, ...rest })}>
    <UserDetails {...({ ...author, clickableProfileLink })} />
    <TwitterLogo {...({ permalink })} />
    <Tweet text={tweet} />
    <Details {...({ time, source, permalink })} />
  </Container>
);

export default TweetCard;
