import React from 'react';
import formatTweetTime from '../../utils/formatTweetTime';
import css from './Details.module.css';

type DetailsProps = {
    time: Date | string,
    source: string;
    permalink?: string;
}

function Details({ time, source, permalink } : DetailsProps) {
  const formattedTime = time instanceof Date ? formatTweetTime(time) : time;

  return (
    <p className={css.details}>
      {permalink ? (
        <a href={permalink} target="_blank" rel="noreferrer">{formattedTime}</a>
      ) : (
        <span>{formattedTime}</span>
      )}
      {' · '}
      <span className={css.source}>{source}</span>
    </p>
  );
}

export default Details;
