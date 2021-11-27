import React from 'react';
import formatTweetTime from '../../utils/formatTweetTime';
import css from './Details.module.css';

type DetailsProps = {
    time: Date | string,
    source: string;
}

function Details({ time, source } : DetailsProps) {
  return (
    <p className={css.details}>
      {time instanceof Date ? formatTweetTime(time) : time}
      {' · '}
      <span className={css.source}>{source}</span>
    </p>
  );
}

export default Details;
