import React from 'react';
import UserDetails from './components/UserDetails';
import Details from './components/Details';
import Tweet from './components/Tweet';
import Container from './components/Container';
import TwitterLogo from './components/TwitterLogo';
import './index.css';

type TweetCardProps = {
  author: {
    name: string,
    username: string,
    image: string,
  },
  tweet: string,
  time: Date | string,
  source: string,
  gradientBackground?: boolean,
  transparentBackground?: boolean
}

const TweetCard = ({
  author, tweet, time, source, gradientBackground, transparentBackground,
} : TweetCardProps) => (
  <Container {...({ gradientBackground, transparentBackground })}>
    <UserDetails {...author} />
    <TwitterLogo />
    <Tweet text={tweet} />
    <Details {...({ time, source })} />
  </Container>
);

export default TweetCard;
