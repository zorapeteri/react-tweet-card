import React from 'react'
import dynamic from 'next/dynamic'

const TweetCard = dynamic(
  () => import('react-tweet-card'),
  { ssr: false }
)

export default TweetCard;