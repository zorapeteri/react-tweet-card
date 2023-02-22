const author = {
  name: 'demi adejuyigbe',
  username: 'electrolemon',
  isVerified: true,
}
const tweet = `4 months ago i quietly left 57 dvds of 'click' at my parents' house and they've still never noticed or mentioned it`
const tweetImages = [
  { src: 'https://pbs.twimg.com/media/BaMEhYBCAAAi6m-?format=jpg' },
]
const time = new Date(2022, 10, 28, 22, 30)
const permalink = 'https://twitter.com/electrolemon/status/406173363174785024'

const Tweet = { author, tweet, tweetImages, time, permalink }
export default Tweet
