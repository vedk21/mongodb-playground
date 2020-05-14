use contactDetails;

// In aggregation pipeline we can use $match stage to filter out the documents
db.contacts.aggregate(
  [
    {
      $match: {
        gender: 'female' // we can use any filter condition here, which we can use in an find query
      }
    }
  ]
);

// NOTE: Aggregation pipelines are used over find queries is because they transform data using the pipeline stages into the format required by an application or user.
