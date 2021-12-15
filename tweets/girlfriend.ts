const author = { 
    name: 'dan mentos', 
    username: 'DanMentos', 
    image: 'https://pbs.twimg.com/profile_images/548378022768701441/2zz0Vk61_400x400.png' 
} 
const tweet = `[introducing girlfriend to my family]
me: this is my girlfriend janine
janine: hi
wife: what the fuck`
const time = new Date(2016, 7, 11, 6, 14);
const source = "TweetDeck"
const permalink = "https://twitter.com/DanMentos/status/763589479055495168"

const Tweet = { author, tweet, time, source, permalink }
export default Tweet;