import React from 'react';
import className from 'utils/className';
import VerifiedBadgeSvg from 'assets/VerifiedBadge.svg';
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
      <Padlock className={css.padlock} />
    )}
  </span>
);

export default Name;
