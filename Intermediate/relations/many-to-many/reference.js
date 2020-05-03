use shop;

/* many-to-many relationship can be implemented using two approaches, 
 1. Embedded Documents
 2. Reference ids
*/
/*
  -- Embedded documents approach is used when relational data is fetched together than separate collections.

  -- Reference ids approach is used when two related collections are required separately than together most of the time.
*/

// many-to-many relationship with embedded documents
db.authors.insertMany(
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
);

db.books.insertMany(
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
);

// Here if original authors information changes, we want the books authors info to change as well, hence reference id's approach is used.
