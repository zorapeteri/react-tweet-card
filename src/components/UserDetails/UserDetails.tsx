import React from 'react';
import { TweetCardProps } from 'index';
import ProfilePicture from '../ProfilePicture';
import Name from '../Name';
import Username from '../Username';
import css from './UserDetails.module.css';

type UserDetailsProps = TweetCardProps['author'] & Pick<TweetCardProps, 'clickableProfileLink' | 'threads'>;

const UserDetails = ({
  name,
  username,
  image,
  isVerified,
  isGovernment,
  isBusiness,
  isProtected,
  clickableProfileLink,
  threads,
}: UserDetailsProps) => {
  const Tag = clickableProfileLink ? 'a' : 'div';

  return (
    <Tag
      {...(clickableProfileLink && {
        href: (threads ? `https://threads.net/@${username}` : `https://twitter.com/${username}`),
        target: '_blank',
        rel: 'noreferrer',
      })}
      className={css.userDetails}
      aria-label={[
        `${threads ? 'Thread by Threads' : `Tweet by Twitter user ${name}`} (@${username})`,
        isVerified && `This ${threads ? 'Threads' : 'Twitter'} account is verified`,
        isProtected && `This ${threads ? 'Threads' : 'Twitter'} account's ${threads ? 'threads' : 'tweets'} are protected`,
        clickableProfileLink &&
        `Click this link to open their profile on ${threads ? 'threads.net' : 'twitter.com'}`,
      ]
        .filter(Boolean)
        .join('. ')}
    >
      <ProfilePicture {...{ image, clickableProfileLink }} />
      {threads ? (

        <Name
          {...{
            name: username,
            isVerified,
            isGovernment,
            isBusiness,
            isProtected,
            clickableProfileLink,
            threads
          }}
        />

      ) : (
        <>
          <Name
            {...{
              name,
              isVerified,
              isGovernment,
              isBusiness,
              isProtected,
              clickableProfileLink,
              threads,
            }}
          />
          <Username {...{ username }} />
        </>
      )}
    </Tag>
  );
};

export default UserDetails;
