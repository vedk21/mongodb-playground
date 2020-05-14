use google_maps;

db.areas.insertOne(
  {
    name: 'South Mumbai',
    area: {
      type: 'Polygon',
      coordinates: [
        [
          [72.8312208, 18.9398318],
          [72.8312208, 18.9398318],
          [72.8299975, 18.9448834],
          [72.8223876, 18.9389789],
          [72.8312208, 18.9398318] // loop has to closed with first point again
        ]
      ]
    }
  }
);

// Find all areas which contain a place
db.areas.find(
  {
    area: {
      $geoIntersects: {
        $geometry: {
          type: 'Point',
          coordinates: [
            72.8253233,
            18.9448888
          ]
        }
      }
    }
  }
);
