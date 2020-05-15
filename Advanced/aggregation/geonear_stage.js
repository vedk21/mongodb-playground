use contactDetails;

// We can use $geoNear to get near by documents by location
db.locations.createIndex(
  {
    location: '2dsphere'
  }
);

db.locations.aggregate(
  [
    {
      $geoNear: {
        near: { // this will be the point from where near by will be calculated
          type: 'Point',
          coordinates: [
            -90.9499,
			      21.3388
          ]
        },
        maxDistance: 1000000, // maximum distance from near point
        num: 10, // number of documents we want to limit
        query: { // any filtering we want to do on documents
          age: {
            $gt: 25
          }
        },
        distanceField: "distance" // field in which the distance from near point will be saved
      }
    }
  ]
);

// NOTE: In order to work with $geoNear, this stage has to be the first stage in our pipeline because it need to take advantage of that index we create on location field.
// And only first stage in pipeline has direct access to collection and other subsequent stages take input from previous stage.
