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
      price: 140.99,
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
