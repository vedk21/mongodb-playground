use contactDetails;

// In aggregation pipeline we can use $project to project and/or transform selected fields into the resulting documents
db.contacts.aggregate(
  [
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: {
          $concat: [ // there are various operators available to transform data
            {
              $toUpper: "$name.first"
            },
            " ",
            {
              $toUpper: "$name.last"
            }
          ]
        }
      }
    }
  ]
);
