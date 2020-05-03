use shop;

// Aggregate pipelines can be used to transform and merge data from different collections
// $lookup is an operator used with aggregation pipeline to find the referenced documents in one single result

db.authors.insertMany(
  [
    {
      _id: ObjectId('mn-1'),
      name: 'Manuel Neuer',
      age: 32
    },
    {
      _id: ObjectId('pl-1'),
      name: 'Philip Lahm',
      age: 37
    }
  ]
);

db.books.insertMany(
  [
    {
      name: 'A Book 1',
      current_price: 120.99,
      authors: [
        ObjectId('mn-1'),
        ObjectId('pl-1'),
      ]
    },
    {
      name: 'A Book 2',
      current_price: 140.99,
      authors: [
        ObjectId('pl-1')
      ]
    }
  ]
);

db.books.aggregate(
  [
    {
      $lookup: {
        from: 'authors',
        localField: 'authors',
        foreignField: '_id',
        as: 'creators'
      }
    }
  ]
).pretty();

/* NOTE:
  1. from - It is the target collection name
  2. localField - field from current collection, which will be compared with the target collection
  3. foreignField - field from target collection, with which the localField will be compared
  4. as - alias field, which will be created to store the result of aggregate output
*/
