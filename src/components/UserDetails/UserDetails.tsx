import React from 'react';
import ProfilePicture from '../ProfilePicture';
import Name from '../Name';
import Username from '../Username';
import css from './UserDetails.module.css';

type UserDetailsProps = {
    name: string;
    username: string;
    image: any;
    isVerified?: boolean;
    isProtected?: boolean;
    clickableProfileLink?: boolean;
};

const UserDetails = ({
  name, username, image, isVerified, isProtected, clickableProfileLink,
}: UserDetailsProps) => {
  const Tag = clickableProfileLink ? 'a' : 'div';

  return (
    <Tag
      {...(clickableProfileLink
        && {
          href: `https://twitter.com/${username}`,
          target: '_blank',
          rel: 'noreferrer',
        }
      )}
      className={css.userDetails}
      aria-label={
      [
        `Tweet by Twitter user ${name} (@${username})`,
        isVerified && 'This twitter account is verified',
        isProtected && 'This twitter account\'s tweets are protected',
        clickableProfileLink && 'Click this link to open their profile on twitter.com',
      ].filter(Boolean).join('. ')
    }
    >
      <ProfilePicture {...({ image, clickableProfileLink })} />
      <Name
        {...({
          name, isVerified, isProtected, clickableProfileLink,
        })}
      />
      <Username {...({ username })} />
    </Tag>
  );
};

export default UserDetails;
