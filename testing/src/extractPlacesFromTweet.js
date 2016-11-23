function doesWordLookLikeAStreet(word) {
  return word.includes('veien') || word.includes('gata');
}

function removePunctuation(word) {
  return word.replace(',', '').replace('.', '');
}

function isNumeric(word) {
  return !isNaN(word);
}

function combineWordsWithTrailingNumbers(word, index, words) {
  const nextWord = words[index + 1];
  return isNumeric(nextWord) ? word + ' ' + nextWord : word;
}

function extractPlacesFromTweet(tweet) {
  const words = tweet.text.split(' ');
  return words
  .map(combineWordsWithTrailingNumbers)
  .filter(doesWordLookLikeAStreet)
  .map(removePunctuation);
}

module.exports = extractPlacesFromTweet;
