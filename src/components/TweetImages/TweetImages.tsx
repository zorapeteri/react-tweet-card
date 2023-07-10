import React, { useRef } from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import { TweetCardProps } from 'index';
import VideoButton from 'components/VideoButton';
import css from './TweetImages.module.css';

type TweetImagesProps = Pick<TweetCardProps, 'tweetImages'>;

const TweetImages = ({ tweetImages = [] }: TweetImagesProps) => {
  const ref = useRef(null);
  const count = Math.min(tweetImages.length, 4);
  return (
    <div {...className(globalClassName('imageContainer'), css.imageContainer)}>
      <div
        {...className(globalClassName('imageContent'), css.imageContent)}
        ref={ref}
        style={{
          gridTemplateRows: count > 2 ? '1fr 1fr' : '1fr',
          gridTemplateColumns: count > 1 ? '1fr 1fr' : '1fr',
        }}
      >
        {tweetImages.slice(0, 4).map(({ src, isVideoThumbnail }, index) => (
          <div
            {...className(globalClassName('image'), css.imageBackground)}
            key={src}
            style={{
              backgroundImage: `url(${src})`,
              gridRow: count === 3 && index === 0 ? '1/3' : undefined,
            }}
          >
            {isVideoThumbnail && <VideoButton />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetImages;
