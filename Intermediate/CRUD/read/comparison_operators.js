use netflix;

// The are various comparison operators available in mongoDB such as $eq, $gte, $lte, $in, $nin

db.tv_series.find(
  {
    runtime: {
      $gte: 40
    }
  }
);

// for embedded documents
db.tv_series.find(
  {
    'rating.average': {
      $lte: 6
    }
  }
);

// for embedded arrays
db.tv_series.find(
  {
    'genres': 'Horror' // this will look for 'Horror' in the array
  }
);

// Compare between set of values
db.tv_series.find(
  {
    'genres': {
      $in: ['Horror', 'Drama'] // this will return genres with either 'Horror' or 'Drama' or both
    }
  }
);

// opposite of $in is $nin
db.tv_series.find(
  {
    'genres': {
      $nin: ['Horror', 'Drama'] // this will return genres anything but 'Horror' and 'Drama'
    }
  }
);
