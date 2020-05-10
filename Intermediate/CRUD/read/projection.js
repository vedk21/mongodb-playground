use netflix;

// while finding documents, we can also project the selected the data fields only

db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  },
  {
    name: 1,
    runtime: 1
  }
);

// NOTE: 1 - show the field, 0 - don't show the field
// BY default, only those fields will be shown whose value is 1 along with _id.

// project the embedded documents few fields only
db.tv_series.find(
  {
    "rating.average": {
      $gte: 7
    }
  },
  {
    name: 1,
    runtime: 1,
    "schedule.time": 1
  }
);
