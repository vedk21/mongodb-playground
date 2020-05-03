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
db.customers.insertOne(
  {
    name: 'Manuel Neuer',
    country: 'GERMANY',
    products_purchased: [
      {
        _id: ObjectId('book-1'),
        name: 'A book',
        price: 120.99
      },
      {
        _id: ObjectId('tv-1'),
        name: 'A TV',
        price: 14000.99
      }
    ]
  }
);

db.products.insertMany(
  [
    {
      _id: ObjectId('book-1'),
      name: 'A book',
      current_price: 120.99
    },
    {
      _id: ObjectId('tv-1'),
      name: 'A TV',
      price: 1400.99
    }
  ]
);

// Here even if original products information changes, we don't want the products purchased history in customer to change, hence embedded document approach is used.
