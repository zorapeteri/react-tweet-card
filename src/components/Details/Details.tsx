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
        >
          {formattedTime}

        </a>
      ) : (
        <span className={globalClassName('time')}>{formattedTime}</span>
      )}
      {' · '}
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
