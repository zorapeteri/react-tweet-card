import React from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import { TweetCardProps } from 'index';
import css from './Name.module.css';
import Padlock from './Padlock';
import VerifiedBadge from './VerifiedBadge';
import ThreadVerifiedBadge from './ThreadsVerifiedBadge';

const badgeColors = {
  basic: '#1da1f2',
  business: '#dcab00',
  government: '#829aab',
};

type NameProps = Pick<
  TweetCardProps['author'],
  'name' | 'isVerified' | 'isBusiness' | 'isGovernment' | 'isProtected'
> &
  Pick<TweetCardProps, 'clickableProfileLink' | 'threads'>;

const Name = ({
  name,
  clickableProfileLink,
  isVerified,
  isGovernment,
  isProtected,
  isBusiness,
  threads
}: NameProps) => (
  <span
    {...className(
      globalClassName('author-name'),
      css.name,
      clickableProfileLink && css.clickable
    )}
    {
    ...(threads && { style: { marginTop: '0.7rem' } })
    }
  >
    <span>{name}</span>
    {isVerified && (threads ?
      (<ThreadVerifiedBadge {...className(globalClassName('verified-badge'), css.threadVerifiedBadge)} />)
      :
      (
        <VerifiedBadge
          {...className(globalClassName('verified-badge'), css.verifiedBadge)}
          style={{
            fill:
              (isGovernment && badgeColors.government) ||
              (isBusiness && badgeColors.business) ||
              badgeColors.basic,
          }}
        />
      ))}
    {isProtected && (
      <Padlock {...className(globalClassName('protected-icon'), css.padlock)} />
    )}
  </span>
);

export default Name;
