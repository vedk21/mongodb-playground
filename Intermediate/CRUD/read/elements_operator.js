use netflix;

// The are two elements operators as $type and $exists

// In order to find all documents where a field exists in document or not, we use $exists
db.tv_series.find(
  {
    rating: {
      $exists: true
    }
  }
);

// In order to find all documents where a field is of given types, we use $type
db.tv_series.find(
  {
    runtime: {
      $type: ['number', 'string']
    }
  }
);

// OR

db.tv_series.find(
  {
    runtime: {
      $type: 'number'
    }
  }
);
