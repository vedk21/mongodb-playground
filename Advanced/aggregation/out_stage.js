use contactDetails;

// We can save the output of the pipeline to a existing collection or new collection
db.contacts.aggregate(
  [
    {
      $project: {
        _id: 0,
        email: 1,
        name: 1,
        location: 1
      }
    },
    {
      $project: {
        email: 1,
        name: 1,
        location: {
          type: 'Point',
          coordinates: [
            {
              $convert: {
                input: "$location.coordinates.longitude",
                to: 'double',
                onError: 0.0,
                onNull: 0.0
              }
            },
            {
              $convert: {
                input: "$location.coordinates.latitude",
                to: 'double',
                onError: 0.0,
                onNull: 0.0
              }
            }
          ]
        }
      }
    },
    {
      $project: {
        email: 1,
        location: 1,
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
    },
    {
      $out: "locations" // it saves the output into given collection
    }
  ]
);
