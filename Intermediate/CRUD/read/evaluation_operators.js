use netflix;

// The evaluation operators are used to read documents on evaluating certain field
// example: $regex and $expr

db.tv_series.find(
  {
    summary: {
      $regex: /musical/ // we can use any valid regular expression here
    }
  }
);

// $expr
db.tv_series.find(
  {
    $expr: {
      $gte: [
        "$runtime",
        "$weight"
      ]
    }
  }
);

// Above expression will return all documents where runtime is greater than or equal to weight
// NOTE: $expr is used when we want to compare the fields from same documents and then return result based on that
