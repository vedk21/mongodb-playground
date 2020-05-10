use netflix;

// we can use $set to add new fields or update existing fields
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $set: {
      longSeries: true, // this will add new field
      weight: 60 // updating existing field
    }
  }
);

// increment or decrement a value
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $inc: {
      weight: 1, // incrementing the field by 1
      "rating.average": -2 // decrementing the embedded field by 2
    }
  }
);
