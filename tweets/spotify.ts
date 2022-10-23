const author = {
  name: 'hatsune mitski (zeph)',
  username: 'zephanijong',
  image:
    'https://pbs.twimg.com/profile_images/1582563234950705153/xsz9xZyW_400x400.jpg',
  isVerified: true
}
const tweet = `if she's your girl why does she follow me on spotify`
const time = new Date(2022, 9, 10, 0, 52)
const source = 'Twitter for iPhone'
const permalink = 'https://twitter.com/zephanijong/status/1579243456869781505'

const Tweet = { author, tweet, time, source, permalink }
export default Tweet
