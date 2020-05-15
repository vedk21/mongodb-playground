use contactDetails;

// We can implement pagination using $skip and $limit stages in aggregation pipeline
db.contacts.aggregate(
  [
    {
      $project: {
        _id: 0,
        gender: 1,
        name: {
          $concat: [
            "$name.first",
            " ",
            "$name.last"
          ]
        },
        birth_date: {
          $toDate: "$dob.date"
        }
      }
    },
    {
      $sort: {
        birth_date: 1
      }
    },
    {
      $skip: 10 // it will be (page - 1) * limit
    },
    {
      $limit: 10
    }
  ]
);

// NOTE: The stages order is very important in aggregation pipeline. In background mongoDb always try to optimize the pipeline but we should not depend on that and always try to create the optimized pipelines.
