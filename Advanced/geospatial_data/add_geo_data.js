use google_maps;

// GeoJSON is a special type of JSON supported by mongoDB which has specific type objects supported. Please refer documentation for it.
db.places.insertOne(
  {
    name: 'Bombay Hospital & Medical Research Center',
    location: { // geoJSON document
      type: "Point", // there are different types of objects supported, 'point' is one of them
      coordinates: [
        72.8253233, // longitude
        18.9448888 // latitude
      ]
    }
  }
);
