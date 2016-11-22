const assert = require('assert');
const Tweet = require('../src/tweet');
const extractPlacesFromTweet = require('../src/extractPlacesFromTweet');

describe('extractPlacesFromTweet', () => {
  it('should extract "Brugata" from a Tweet referencing Brugata', () => {
    const tweet = new Tweet(
      'To personer har blitt frastjålet gjenstander i Brugata. ' + 
      'Gj.person ble sprayet med forsvarsspray i ansiktet. Vi ' + 
      'ser etter en rødmalt mann.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Brugata']);
  });

  it('should return "Holmenkollveien" & "Frognerveien" given a Tweet with both', () => {
    const tweet = new Tweet(
      'Politiet er på vei til Holmenkollveien, nesten oppe ved ' + 
      'Frognerveien hvor en bil skal ha kjøt ut i grøfta. Skal ' + 
      'ikke være personskade.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Holmenkollveien', 'Frognerveien']);
  });

  it('should return "Brugata" & "Holmenkollveien" given a Tweet with both', () => {
    const tweet = new Tweet(
      'Politiet er på vei til Holmenkollveien, nesten oppe ved ' + 
      'Brugata hvor en bil skal ha kjøt ut i grøfta. Skal ' + 
      'ikke være personskade.'
    );
    const places = extractPlacesFromTweet(tweet);
    assert.deepEqual(places, ['Holmenkollveien', 'Brugata']);
  });
});
