import React, { useRef } from 'react';
import className from 'utils/className';
import globalClassName from 'utils/globalClassName';
import { TweetCardProps } from 'index';
import css from './TweetImage.module.css';
import VideoButton from 'components/VideoButton';

type TweetImagesProps = Pick<TweetCardProps, 'tweetImages'>;

const TweetImage = ({ tweetImages = [] }: TweetImagesProps) => {
    const ref = useRef(null);
    const count = tweetImages.length;
    return (
        <div {...className(globalClassName('imageContainer'), css.imageContainer)}>
            <div {...className(globalClassName('imageContent'), css.imageContent)} ref={ref} style={{
                gridTemplateRows: count > 2 ? `1fr 1fr` : `1fr`,
                gridTemplateColumns: count > 1 ? `1fr 1fr` : `1fr`,
            }}>
                {tweetImages.map((image, index) => (
                    <div
                        {...className(globalClassName('image'), css.imageBackground)}
                        key={index}
                        style={{
                            backgroundImage: `url(${image})`,
                            gridRow: count === 3 && index === 0 ? '1/3' : undefined
                        }}
                    >
                        { image.includes('video') && <VideoButton /> }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TweetImage;
