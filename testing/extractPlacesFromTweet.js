function extractPlacesFromTweet(tweet) {
  return tweet.text.split(' ')
  .filter(word => word.includes('veien') || word.includes('gata'))
  .map(place => place.replace(',', '').replace('.', ''));
}

module.exports = extractPlacesFromTweet;
