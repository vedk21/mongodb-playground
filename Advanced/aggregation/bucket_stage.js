use contactDetails;

// $bucket is used to group documents into buckets of different ranges
db.contacts.aggregate(
  [
    {
      $bucket: {
        groupBy: "$dob.age", // on what field we want to group by
        boundaries: [0, 30, 45, 60, 80], // range for the bucket
        output: { // in here we can use any accumulation operator used in normal $group stage
          avgAge: {
            $avg: "$dob.age"
          },
          totalPeople: {
            $sum: 1
          }
        }
      }
    }
  ]
);

// There is another to bucket documents, this approach will automatically divide documents into specified number of buckets instead of giving bucket boundaries
db.contacts.aggregate(
  [
    {
      $bucketAuto: {
        groupBy: "$dob.age", // on what field we want to group by
        buckets: 4, // number of buckets we want
        output: { // in here we can use any accumulation operator used in normal $group stage
          avgAge: {
            $avg: "$dob.age"
          },
          totalPeople: {
            $sum: 1
          }
        }
      }
    }
  ]
);
