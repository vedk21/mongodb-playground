use netflix;

// if we want ot remove a field from document we use $unset operator
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $unset: {
      weight: "", // this will remove weight from document
    }
  }
);

// if we want to rename any field we use $rename operator
db.tv_series.updateOne(
  {
    runtime: {
      $gte: 42
    }
  },
  {
    $rename: {
      weight: "total_weight", // this will rename weight to 'total_weight' in document
    }
  }
);
