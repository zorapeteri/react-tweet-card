import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
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
      globalClassName('author-image'),
      css.profilePicture,
      clickableProfileLink && css.clickable,
    )}
  />
);

export default ProfilePicture;
