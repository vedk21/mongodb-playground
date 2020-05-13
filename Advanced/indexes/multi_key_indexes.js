use netflix;

// Multi key indexes works on array fields inside document
db.tv_series.createIndex(
  {
    genres: 1
  }
);

// genres is an array of strings, hence mongoDB for every document index genres will store save all values inside that array in that index only.
// Example: 
/*
  {
    name: 'The Last Ship',
    genres: [ 'Drama', 'Horror', 'Romantic' ]
  }

  for this document, index: 'genres_1' will save all 'Drama', 'Horror', 'Romantic' in one index
*/

// Multi key index on array of documents
db.tv_series.createIndex(
  {
    reviews: 1
  }
);

// Example:
/*
  {
    name: 'The Last Ship',
    reviews: [
      {
        reviewer: 'Max',
        points: 4.5,
        review: 'Good Content'
      },
      {
        reviewer: 'Reema',
        points: 3.9,
        review: 'Great Series'
      }
    ]
  }

  for this document, index: 'reviews_1' will save all documents completely in one index
*/

// We can also have multi key indexes on fields inside embedded documents
db.tv_series.createIndex(
  {
    "reviews.reviewer": 1
  }
);

// for this document, index: 'reviews_reviewer_1' will save all 'reviews.reviewer' in one index

// NOTE: Multi key indexes will improve performance if query is on array fields, but they of course save more details than the normal single field indexes.

// Allowed
db.tv_series.createIndex(
  {
    "name": 1,
    "reviews.reviewer": 1
  }
);

// Not Allowed
db.tv_series.createIndex(
  {
    "genres": 1,
    "reviews.reviewer": 1
  }
);

// NOTE: we can also have combination of single field and array field multi key index, but cannot have multiple array fields multi key indexes.
