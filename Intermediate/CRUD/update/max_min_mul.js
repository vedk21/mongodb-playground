use netflix;

// we can use $max to update the given field if its less than the given value
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $max: {
      weight: 20, // this will change weight to 20 if current value is less than 20
    }
  }
);

// $min
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $min: {
      weight: 20, // this will change weight to 20 if current value is greater than 20
    }
  }
);

// $mul
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $mul: {
      weight: 2.2, // this will multiply weight current value with 2.2 and update
    }
  }
);

