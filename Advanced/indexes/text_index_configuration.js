use netflix;

// We can configure default language used for text index search, also the weights to calculate the score
db.tv_series.createIndex(
  {
    summary: 'text',
    name: 'text'
  },
  {
    default_language: 'english', // 'english' is default, but we can also pass 'german', 'french' etc...
    weights: {
      name: 10,
      summary: 1
    }
  }
);

// NOTE: MongoDB supports particular set of languages for text indexes search only. we can find that in documentation.
// NOTE: weights are used to calculate score
// Example:
// If we search 'last take' and if we find two document
/*
  {
    name: 'momento',
    summary: 'last take on this is great'
  },
  {
    name: 'last take',
    summary: 'brilliant execution'
  }
*/
// In above example, it makes more sense if the search string which matches 'name' field should come first so that is where weights will come into picture.

// Case sensitive search
db.tv_series.find(
  {
    $text: {
      $search: '"good series"', // case sensitive search
      $caseSensitive: true // default is false
    }
  }
);

// foreground vs background index creation

// foreground
db.tv_series.createIndex(
  {
    name: 1
  }
);

// background
db.tv_series.createIndex(
  {
    name: 1
  },
  {
    background: true // default is false
  }
);

// NOTE: foreground creation will lock the collection from executing any queries, but it will be faster
// on the other hand background creation will be slower but it will not lock the collection.
