import React, { useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TweetCard, { TweetCardProps } from '.';

export default {
  title: 'Components/TweetCard',
  component: TweetCard,
  argTypes: {
    theme: {
      options: ['light', 'dim', 'dark'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof TweetCard>;

const buildProps = (args: any) => {
  const {
    tweet,
    tweetImages,
    time,
    source,
    permalink,
    fitInsideContainer,
    showEmojis: emojis,
    replies,
    likes,
    retweets,
    theme,
    clickableProfileLink,
    showDetails,
    gradientBackground,
    blurredBackground,
  } = args;
  const props: TweetCardProps = {
    author: {
      name: args.name,
      username: args.username,
      image: args.image,
      isVerified: args.verified,
      isGovernment: args.government,
      isBusiness: args.business,
      isProtected: args.protected,
    },
    tweet,
    tweetImages,
    time,
    source,
    permalink,
    fitInsideContainer,
    emojis,
    showDetails,
    clickableProfileLink,
    gradientBackground,
    blurredBackground,
    theme,
    ...(replies || likes || retweets
      ? { engagement: { replies, likes, retweets } }
      : {}),
  };
  return props;
};

const baseArgs = {
  name: 'Cadavril Lavigne',
  username: 'cadavrillavigne',
  image:
    'https://pbs.twimg.com/profile_images/1611461938860400646/8tfem0_u_400x400.jpg',

  tweet:
    "having to explain to my cat that i also don't know what that sound outside is but i don't like it either",
  tweetImages: [
    'https://pbs.twimg.com/media/FkwE7_fWQAAvysZ.jpg',
    'https://pbs.twimg.com/ext_tw_video_thumb/1610674881439436802/pu/img/hYQnfH3vzYulzEUD.jpg',
  ],
  time: new Date('2023/01/15 10:42'),
  source: '',
  verified: false,
  government: false,
  business: false,
  protected: false,
  fitInsideContainer: false,
  showEmojis: false,
  clickableProfileLink: false,
  showDetails: true,
  permalink: '',
  replies: 0,
  retweets: 0,
  likes: 0,
  theme: 'light',
  gradientBackground: false,
  blurredBackground: false,
};

const Template: ComponentStory<any> = (args) => {
  const { gradientBackground, blurredBackground } = args;
  useEffect(() => {
    document.body.classList.toggle(
      'showPic',
      gradientBackground || blurredBackground
    );
  }, [gradientBackground, blurredBackground]);
  return <TweetCard {...buildProps(args)} />;
};

const make = (args: any) => {
  const instance = Template.bind({});
  instance.args = {
    ...baseArgs,
    ...args,
  };
  return instance;
};

export const Default = make({});

export const Dim = make({ theme: 'dim' });

export const Dark = make({ theme: 'dark' });

export const WithSource = make({ source: 'Twitter for iPhone' });

export const WithPermalink = make({
  permalink: 'https://twitter.com/cadavrillavigne/status/1614558613862813696',
});

export const Verified = make({ verified: true });

export const Government = make({ verified: true, government: true });

export const Business = make({ verified: true, business: true });

export const Protected = make({ protected: true });

export const WithoutDetails = make({ showDetails: false });

export const WithClickableProfileLink = make({ clickableProfileLink: true });

export const WithEngagement = make({ replies: 12, retweets: 34, likes: 56 });

export const TweetImages = make({
  tweetImages: [
    'https://pbs.twimg.com/media/FkwE7_fWQAAvysZ.jpg',
    'https://pbs.twimg.com/ext_tw_video_thumb/1610674881439436802/pu/img/hYQnfH3vzYulzEUD.jpg',
  ]});

export const WithBigEngagement = make({
  replies: 12000,
  retweets: 3400000,
  likes: 56000000,
});

export const WithEmojis = make({
  replies: 12,
  retweets: 34,
  likes: 56,
  showEmojis: true,
});

export const WithGradientBackground = make({ gradientBackground: true });

export const WithBlurredBackground = make({ blurredBackground: true });
