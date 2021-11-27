import React from 'react';
import ProfilePicture from '../ProfilePicture';
import Name from '../Name';
import Username from '../Username';
import css from './UserDetails.module.css';

type UserDetailsProps = {
    name: string;
    username: string;
    image: any;
};

const UserDetails = ({ name, username, image }: UserDetailsProps) => (
  <div className={css.userDetails}>
    <ProfilePicture src={image} alt="" />
    <Name name={name} />
    <Username username={username} />
  </div>
);

export default UserDetails;
