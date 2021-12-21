import React from 'react';
import className from 'utils/className';
import formatTweetTime from 'utils/formatTweetTime';
import globalClassName from 'utils/globalClassName';
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
        <a
          href={permalink}
          target="_blank"
          rel="noreferrer"
          className={globalClassName('time')}
          aria-label={
            [`Posted at ${time instanceof Date ? formatTweetTime(time, true) : time}`,
              permalink && 'Click this link to view this tweet on twitter.com'].filter(Boolean).join('. ')
          }
        >
          {formattedTime}
        </a>
      ) : (
        <span className={globalClassName('time')}>{formattedTime}</span>
      )}
      <span aria-hidden="true"> · </span>
      <span
        {...className(
          globalClassName('source'),
          css.source,
        )}
      >
        {source}
      </span>
    </p>
  );
}

export default Details;
