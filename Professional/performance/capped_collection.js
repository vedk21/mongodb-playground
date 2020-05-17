use dummy;

// We can create capped collection which can limit the size of the collection, hence not matter what the data we insert the max size will always be constant.
db.createCollection(
  'cappedCollection',
  {
    capped: true,
    size: 10000, // in bytes, default is 4 bytes // max size of the collection
    max: 5 // optional, number of documents it can hold
  }
);

// NOTE: We can use such collection to maintain logs or cached data, where we only need latest data and wants historical data to be deleted automatically.
