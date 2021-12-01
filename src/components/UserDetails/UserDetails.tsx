import React from 'react';
import ProfilePicture from '../ProfilePicture';
import Name from '../Name';
import Username from '../Username';
import css from './UserDetails.module.css';

type UserDetailsProps = {
    name: string;
    username: string;
    image: any;
    clickableProfileLink?: boolean;
};

const UserDetails = ({
  name, username, image, clickableProfileLink,
}: UserDetailsProps) => (
  <a
    href={clickableProfileLink ? `https://twitter.com/${username}` : ''}
    target="_blank"
    className={css.userDetails}
    rel="noreferrer"
  >
    <ProfilePicture src={image} alt="" />
    <Name {...({ name, clickableProfileLink })} />
    <Username username={username} />
  </a>
);

export default UserDetails;
