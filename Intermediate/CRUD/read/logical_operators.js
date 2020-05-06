use netflix;

// The are various logical operators which can be used for logical filtering such as $or, $nor, $and, $not

// $or and $nor
db.tv_series.find(
  {
    $or: [
      {
        runtime: {
          $gte: 30
        }
      },
      {
        runtime: {
          $lt: 60
        }
      }
    ]
  }
);

db.tv_series.find(
  {
    $nor: [
      {
        runtime: {
          $gte: 30
        }
      },
      {
        runtime: {
          $lt: 60
        }
      }
    ]
  }
);

// Logical 'and' can be queried using two methods (Each having its own benefit)
db.tv_series.find(
  {
    $and: [
      {
        runtime: {
          $gte: 40
        }
      },
      {
        runtime: {
          $lt: 60
        }
      }
    ]
  }
);

// NOTE: $and can be very essential when we have to add filter on same fields in the document, then we can't add comma separated filters as shown below.

db.tv_series.find(
  {
    runtime: {
      $gte: 60
    },
    genres: {
      $in: ['Horror', 'Drama']
    }
  }
);

// $not operator (Used to inverse the condition)
db.tv_series.find(
  {
    genres: {
      $not: {
        $in: ['Drama']
      }
    }
  }
);
