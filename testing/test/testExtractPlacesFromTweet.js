const assert = require('assert');
const Tweet = require('../src/tweet');
const extractPlacesFromTweet = require('../src/extractPlacesFromTweet');

describe('ExtractPlacesFromTweet', () => {

  xit('should extract "Brugata" given a tweet containing it', () => {
      const tweet = new Tweet(
        'To personer har blitt frastjålet gjenstander i Brugata. ' +
        'Gj. person ble sprayet med forssvarsspray i ansiktet. Vi ' + 
        'ser etter en rødmalt mann.'
      );
     const places = extractPlacesFromTweet(tweet);
     assert.deepEqual(places, ['Brugata']);
  });

  xit('should return "Holmenkollveien" & "Frognerveien" given a Tweet with both', () => {
    const tweet = new Tweet(
      'Politiet er på vei til Holmenkollveien, nesten oppe ved ' + 
      'Frognerveien hvor en bil skal ha kjøt ut i grøfta. Skal ' + 
      'ikke være personskade.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Holmenkollveien', 'Frognerveien']);
  });

  xit('should return "Brugata" & "Holmenkollveien" given a Tweet with both', () => {
    const tweet = new Tweet(
      'Politiet er på vei til Holmenkollveien, nesten oppe ved ' + 
      'Brugata hvor en bil skal ha kjøt ut i grøfta. Skal ' + 
      'ikke være personskade.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Holmenkollveien', 'Brugata']);
  });

  xit('should return "Brugata 62" if street number is in Tweet', () => {
    const tweet = new Tweet(
      'Politiet er på vei til Brugata 62.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Brugata 62']);
  });

  xit('should return "Brugata 43" if street number is in Tweet', () => {
    const tweet = new Tweet(
      'Politiet er på vei til Brugata 43.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Brugata 43']);
  });
});
