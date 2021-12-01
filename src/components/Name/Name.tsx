import React from 'react';
import className from 'utils/className';
import VerifiedBadgeSvg from 'assets/VerifiedBadge.svg';
import PadlockSvg from 'assets/Padlock.svg';
import css from './Name.module.css';

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
      css.name,
      clickableProfileLink && css.clickable,
    )}
  >
    <span>{ name }</span>
    {isVerified && (
      <img
        src={VerifiedBadgeSvg}
        className={css.verifiedBadge}
        alt="verified twitter acount"
      />
    )}
    {isProtected && (
      <img
        src={PadlockSvg}
        className={css.padlock}
        alt="protected twitter acount"
      />
    )}
  </span>
);

export default Name;
