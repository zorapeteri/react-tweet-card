import React, { useState, useEffect } from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import css from './ProfilePicture.module.css';

type ProfilePictureProps = {
    image: string;
    clickableProfileLink?: boolean;
};

const fallback = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png';

const ProfilePicture = ({ image, clickableProfileLink }: ProfilePictureProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => setImageLoaded(false), [image]);

  return (
    <>
      <img
        src={image}
        alt=""
        {...className(
          globalClassName('author-image'),
          css.profilePicture,
          clickableProfileLink && css.clickable,
          !imageLoaded && css.hide,
        )}
        onError={() => setImageLoaded(false)}
        onLoad={() => setImageLoaded(true)}
      />
      <img
        src={fallback}
        alt=""
        {...className(
          globalClassName('author-image'),
          css.profilePicture,
          clickableProfileLink && css.clickable,
          imageLoaded && css.hide,
        )}
      />
    </>
  );
};

export default ProfilePicture;
