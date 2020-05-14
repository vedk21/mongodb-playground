use google_maps;

// Find all places inside an given area
db.places.find(
  {
    location: {
      $geoWithin: {
        $geometry: {
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
    }
  }
);
