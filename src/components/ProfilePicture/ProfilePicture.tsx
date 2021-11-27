import React from 'react';
import css from './ProfilePicture.module.css';

type ProfilePictureProps = {
    src: any;
    alt: string;
};

const ProfilePicture = ({ src, alt }: ProfilePictureProps) => (
  <img
    src={src}
    alt={alt}
    className={css.profilePicture}
  />
);

export default ProfilePicture;
