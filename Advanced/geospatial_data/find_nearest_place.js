use google_maps;

// In order to get this geo-spatial query to work we need to have an index created over location field
db.places.createIndex(
  {
    location: '2dsphere'
  }
);

// Find nearest places using geoJSON queries provided by mongoDB
db.places.find(
  {
    location: {
      $near: { // special operator for querying geo-spatial data
        $geometry: { // has to be a geoJSON document
          type: "Point",
          coordinates: [ // these are current location coordinates, from which we want to find the nearest places
            72.8312208,
            18.9398318
          ]
        }
      }
    }
  }
);

// we can also limit the minDistance and maxDistance for near by places query
db.places.find(
  {
    location: {
      $near: { // special operator for querying geo-spatial data
        $geometry: { // has to be a geoJSON document
          type: "Point",
          coordinates: [ // these are current location coordinates, from which we want to find the nearest places
            72.8312208,
            18.9398318
          ]
        },
        $minDistance: 10, // it is in meters
        $maxDistance: 1000 // it is in meters
      }
    }
  }
);
