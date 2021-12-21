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
}: UserDetailsProps) => (
  <a
    href={clickableProfileLink ? `https://twitter.com/${username}` : ''}
    target="_blank"
    className={css.userDetails}
    rel="noreferrer"
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
  </a>
);

export default UserDetails;
