const author = {
  name: 'Ethan Hardy',
  username: 'ethanhardy',
  image:
    'https://pbs.twimg.com/profile_images/1579548555131424775/PgoOLvU7_400x400.jpg'
}
const tweet = `You say that it's fucked that gingerbread men live in gingerbread houses, but to a gingerbread person, gingerbread is as inscrutable and fundamental as carbon. The people and homes are no more alike than humans are to diamonds. Only we, their gods and creators, can see the horror`
const time = new Date(2021, 11, 21, 14, 6)
const source = 'Twitter for iPhone'
const permalink = 'https://twitter.com/ethanhardy/status/1473278732676837382'

const Tweet = { author, tweet, time, source, permalink }
export default Tweet
