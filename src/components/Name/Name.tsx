import React from 'react';
import className from 'utils/className';
import VerifiedBadgeSvg from 'assets/VerifiedBadge.svg';
import css from './Name.module.css';

type NameProps = {
    name: string;
    clickableProfileLink?: boolean;
    verified?: boolean;
};

const Name = ({ name, clickableProfileLink, verified }: NameProps) => (
  <span
    {...className(
      css.name,
      clickableProfileLink && css.clickable,
    )}
  >
    <span>{ name }</span>
    {verified && (
      <img
        src={VerifiedBadgeSvg}
        className={css.verifiedBadge}
        alt="twitter verified badge"
      />
    )}

  </span>
);

export default Name;
