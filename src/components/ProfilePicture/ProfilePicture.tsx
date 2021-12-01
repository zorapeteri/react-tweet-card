import React from 'react';
import className from 'utils/className';
import css from './ProfilePicture.module.css';

type ProfilePictureProps = {
    image: string;
    clickableProfileLink?: boolean;
};

const ProfilePicture = ({ image, clickableProfileLink }: ProfilePictureProps) => (
  <img
    src={image}
    alt=""
    {...className(
      css.profilePicture,
      clickableProfileLink && css.clickable,
    )}
  />
);

export default ProfilePicture;
