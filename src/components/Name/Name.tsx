import React from 'react';
import className from 'utils/className';
import VerifiedBadgeSvg from 'assets/VerifiedBadge.svg';
import globalClassName from 'utils/globalClassName';
import css from './Name.module.css';
import Padlock from './Padlock';

type NameProps = {
    name: string;
    clickableProfileLink?: boolean;
    isVerified?: boolean;
    isProtected?: boolean;
};

const Name = ({
  name, clickableProfileLink, isVerified, isProtected,
}: NameProps) => (
  <span
    {...className(
      globalClassName('author-name'),
      css.name,
      clickableProfileLink && css.clickable,
    )}
  >
    <span>{ name }</span>
    {isVerified && (
      <img
        src={VerifiedBadgeSvg}
        alt="verified twitter acount"
        {...className(
          globalClassName('verified-badge'),
          css.verifiedBadge,
        )}
      />
    )}
    {isProtected && (
      <Padlock
        {...className(
          globalClassName('protected-icon'),
          css.padlock,
        )}
      />
    )}
  </span>
);

export default Name;
