use netflix;

// Text indexes can be used to search for text efficiently in a collection. It stores all the key-words in an index so yes they are expensive in terms of storage as compare to normal single field indexes.
db.tv_series.createIndex(
  {
    summary: 'text'
  }
);

// query
db.tv_series.find(
  {
    $text: {
      $search: 'good series' // case insensitive text
      // this will search for two different words individually 'good' and 'series'
    }
  }
);

// for complete string search
db.tv_series.find(
  {
    $text: {
      $search: '"good series"' // case insensitive text
      // by wrapping it in double quotes this will search for complete string 'good series' as whole
    }
  }
);

// sorting results based on text score
db.tv_series.find(
  {
    $text: {
      $search: 'good series' // case insensitive text
      // this will search for two different words individually 'good' and 'series'
    }
  },
  {
    score: {
      $meta: 'textScore' // special metadata score added when $text search is used in query
      // it represents hw much score a document has scored for search
      // in given query we need to find both good and series key-words, hence documents with both key-words will have high score than the documents with only either of the key-words.
    }
  }
).sort(
  {
    score: {
      $meta: 'textScore'
    }
  }
);

// Combined text indexes on multiple text fields from same document
db.tv_series.createIndex(
  {
    summary: 'text',
    name: 'text'
  }
);

// NOTE: This will create only one index but will store key-words from both the text fields, hence we can search texts from both the fields but again this will be very costly too in terms of storage.

// Excluding text search (search for string excluding certain text)
db.tv_series.find(
  {
    $text: {
      $search: 'good series -movies' // case insensitive text
      // this will only search for 'good' and 'series' but will exclude keyword 'movies' because of the'-' sign in-front of the word
    }
  }
);
